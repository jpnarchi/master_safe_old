from docx import Document
from docx.shared import Pt, RGBColor, Inches, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
import copy

doc = Document()

# ── Page margins ──────────────────────────────────────────────────────────────
for section in doc.sections:
    section.top_margin    = Cm(2)
    section.bottom_margin = Cm(2)
    section.left_margin   = Cm(2.5)
    section.right_margin  = Cm(2.5)

# ── Helpers ───────────────────────────────────────────────────────────────────
NAVY   = RGBColor(0x0A, 0x14, 0x2E)
BLUE   = RGBColor(0x00, 0x5C, 0xE8)
WHITE  = RGBColor(0xFF, 0xFF, 0xFF)
LGRAY  = RGBColor(0xF4, 0xF6, 0xFA)
DGRAY  = RGBColor(0x55, 0x65, 0x7A)
BLACK  = RGBColor(0x11, 0x18, 0x27)

# Badge palette  (type → RGB fill)
BADGE = {
    "Hero":           RGBColor(0xE0, 0x45, 0x2A),
    "Carousel":       RGBColor(0x7C, 0x3A, 0xED),
    "Tab Image":      RGBColor(0x20, 0x7C, 0xDC),
    "Logo":           RGBColor(0xD4, 0x9A, 0x00),
    "Background":     RGBColor(0x6B, 0x72, 0x80),
    "Icon":           RGBColor(0x16, 0xA3, 0x4A),
    "Gallery":        RGBColor(0x0D, 0x9E, 0x8A),
    "Table":          RGBColor(0xC0, 0x59, 0x21),
    "Content Image":  RGBColor(0x1E, 0x7A, 0x8C),
    "Card Background":RGBColor(0x3B, 0x4A, 0x6B),
    "Card Image":     RGBColor(0x3B, 0x4A, 0x6B),
    "Table Image":    RGBColor(0x8B, 0x2A, 0x2A),
    "Video":          RGBColor(0x1A, 0x1A, 0x2E),
}

def set_cell_bg(cell, rgb: RGBColor):
    tc   = cell._tc
    tcPr = tc.get_or_add_tcPr()
    shd  = OxmlElement('w:shd')
    shd.set(qn('w:val'),   'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'),  str(rgb))
    tcPr.append(shd)

def set_cell_border(cell, sides=('top','left','bottom','right'), color='CCCCCC', sz='4'):
    tc   = cell._tc
    tcPr = tc.get_or_add_tcPr()
    tcBorders = OxmlElement('w:tcBorders')
    for side in sides:
        el = OxmlElement(f'w:{side}')
        el.set(qn('w:val'),   'single')
        el.set(qn('w:sz'),    sz)
        el.set(qn('w:space'), '0')
        el.set(qn('w:color'), color)
        tcBorders.append(el)
    tcPr.append(tcBorders)

def cell_para(cell, text, bold=False, size=10, color=BLACK, align=WD_ALIGN_PARAGRAPH.LEFT):
    cell.paragraphs[0].clear()
    p   = cell.paragraphs[0]
    p.alignment = align
    run = p.add_run(text)
    run.bold       = bold
    run.font.size  = Pt(size)
    run.font.color.rgb = color
    return p

def add_heading(doc, text, level=1):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    if level == 1:
        run = p.add_run(text)
        run.bold = True
        run.font.size = Pt(22)
        run.font.color.rgb = NAVY
    elif level == 2:
        run = p.add_run(text)
        run.bold = True
        run.font.size = Pt(15)
        run.font.color.rgb = BLUE
    elif level == 3:
        run = p.add_run(f'▸  {text}')
        run.bold = True
        run.font.size = Pt(11)
        run.font.color.rgb = DGRAY
    p.paragraph_format.space_before = Pt(10 if level > 1 else 4)
    p.paragraph_format.space_after  = Pt(4 if level == 3 else 6)
    return p

def add_rule(doc, color='C8D0E0'):
    p = doc.add_paragraph()
    pPr = p._p.get_or_add_pPr()
    pBdr = OxmlElement('w:pBdr')
    bot  = OxmlElement('w:bottom')
    bot.set(qn('w:val'),   'single')
    bot.set(qn('w:sz'),    '4')
    bot.set(qn('w:space'), '1')
    bot.set(qn('w:color'), color)
    pBdr.append(bot)
    pPr.append(pBdr)
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after  = Pt(6)

def note(doc, text):
    p   = doc.add_paragraph()
    run = p.add_run(f'ℹ  {text}')
    run.font.size      = Pt(9)
    run.font.color.rgb = DGRAY
    run.italic         = True
    p.paragraph_format.space_after = Pt(4)

# ── Image data ────────────────────────────────────────────────────────────────
PAGES = [
    {
        "title": "PG Neu",
        "route": "/neu",
        "category": "Producto",
        "sections": [
            {
                "name": "Hero",
                "images": [
                    ("heroheaderPGNeu.png", "/heroheaderPGNeu.png", "100% ancho × 500–740 px alto", "Hero"),
                ]
            },
            {
                "name": "Logo / Badge",
                "images": [
                    ("Neulogo.png", "/lovable-uploads/Neulogo.png", "180–389 px ancho × auto alto", "Logo"),
                ]
            },
            {
                "name": "Tabs de contenido (4 tabs)",
                "images": [
                    ("composicionPGNeu.jpg",     "/composicionPGNeu.jpg",     "100% ancho × 260–500 px alto", "Tab Image"),
                    ("especificacionesPGNeu.jpg", "/especificacionesPGNeu.jpg","100% ancho × 260–500 px alto", "Tab Image"),
                    ("casosdeusoPGNeu.jpg",       "/casosdeusoPGNeu.jpg",       "100% ancho × 260–500 px alto", "Tab Image"),
                ]
            },
            {
                "name": "Tabla Balística (3 idiomas)",
                "images": [
                    ("Tabla_Balistica_PG_2025-ES.png", "/Tabla_Balistica_PG_2025-ES.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-EN.png", "/Tabla_Balistica_PG_2025-EN.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-PT.png", "/Tabla_Balistica_PG_2025-PT.png", "100% ancho responsive", "Table"),
                ]
            },
            {
                "name": "Fondo Formulario de Contacto",
                "images": [
                    ("bg_form_contact@2x.png", "/bg_form_contact@2x.png", "100% ancho × 100% alto (cover absoluto)", "Background"),
                ]
            },
        ]
    },
    {
        "title": "Steel Glass",
        "route": "/steelglass",
        "category": "Producto",
        "sections": [
            {
                "name": "Hero Carrusel (3 slides — rota cada 4 s)",
                "images": [
                    ("HeroPGSteelGlass-1.png", "/HeroPGSteelGlass-1.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGSteelGlass-2.png", "/HeroPGSteelGlass-2.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGSteelGlass-3.png", "/HeroPGSteelGlass-3.png", "100% ancho × 500–740 px alto", "Hero"),
                ]
            },
            {
                "name": "Logo / Badge",
                "images": [
                    ("SteelGlasslogo.png", "/lovable-uploads/SteelGlasslogo.png", "180–389 px ancho × auto alto", "Logo"),
                ]
            },
            {
                "name": "Tabs de contenido (4 tabs)",
                "images": [
                    ("TabsPGSteelGlass-1.png", "/TabsPGSteelGlass-1.png", "100% ancho × 260–500 px alto", "Tab Image"),
                    ("TabsPGSteelGlass-2.png", "/TabsPGSteelGlass-2.png", "100% ancho × 260–500 px alto", "Tab Image"),
                    ("TabsPGSteelGlass-3.png", "/TabsPGSteelGlass-3.png", "100% ancho × 260–500 px alto", "Tab Image"),
                    ("TabsPGSteelGlass-4.png", "/TabsPGSteelGlass-4.png", "100% ancho × 260–500 px alto", "Tab Image"),
                ]
            },
            {
                "name": "Casos de Uso — Carrusel (3 slides)",
                "images": [
                    ("CasosdeUsoPGSteelGlass-1.png", "/CasosdeUsoPGSteelGlass-1.png", "100% ancho × 260–500 px alto", "Carousel"),
                    ("CasosdeUsoPGSteelGlass-2.png", "/CasosdeUsoPGSteelGlass-2.png", "100% ancho × 260–500 px alto", "Carousel"),
                ]
            },
            {
                "name": "Tabla Balística (3 idiomas)",
                "images": [
                    ("Tabla_Balistica_PG_2025-ES.png", "/Tabla_Balistica_PG_2025-ES.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-EN.png", "/Tabla_Balistica_PG_2025-EN.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-PT.png", "/Tabla_Balistica_PG_2025-PT.png", "100% ancho responsive", "Table"),
                ]
            },
            {
                "name": "Fondo Formulario de Contacto",
                "images": [
                    ("bg_form_contact@2x.png", "/bg_form_contact@2x.png", "100% ancho × 100% alto (cover absoluto)", "Background"),
                ]
            },
        ]
    },
    {
        "title": "GlassGuard",
        "route": "/glassguard",
        "category": "Producto",
        "sections": [
            {
                "name": "Hero Carrusel (3 slides — rota cada 4 s)",
                "images": [
                    ("HeroPGGlassGuardefecto-1.png", "/HeroPGGlassGuardefecto-1.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGGlassGuardefecto-2.png", "/HeroPGGlassGuardefecto-2.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGGlassGuardefecto-3.png", "/HeroPGGlassGuardefecto-3.png", "100% ancho × 500–740 px alto", "Hero"),
                ]
            },
            {
                "name": "Logo / Badge",
                "images": [
                    ("btn_pg_glassguard.png", "/btn_pg_glassguard.png", "200–389 px ancho × auto alto", "Logo"),
                ]
            },
            {
                "name": "Tabs de contenido (4 tabs)",
                "images": [
                    ("Tab1PGGlasGuard.png",             "/Tab1PGGlasGuard.png",             "100% ancho × 260–500 px alto", "Tab Image"),
                    ("Tab2PGGlassguardComposicion.png",  "/Tab2PGGlassguardComposicion.png",  "100% ancho × 260–500 px alto", "Tab Image"),
                    ("Tab3PGGlassguardTecnologia.png",   "/Tab3PGGlassguardTecnologia.png",   "100% ancho × 260–500 px alto", "Tab Image"),
                    ("Tab4PGGlassguardEspecificaciones.png","/Tab4PGGlassguardEspecificaciones.png","100% ancho × 260–500 px alto","Tab Image"),
                ]
            },
            {
                "name": "Casos de Uso — Carrusel (3 slides)",
                "images": [
                    ("PGGlassguardCasosdeUso-1.png", "/PGGlassguardCasosdeUso-1.png", "100% ancho × 260–500 px alto", "Carousel"),
                    ("PGGlassguardCasosdeUso-2.png", "/PGGlassguardCasosdeUso-2.png", "100% ancho × 260–500 px alto", "Carousel"),
                    ("PGGlassguardCasosdeUso-3.png", "/PGGlassguardCasosdeUso-3.png", "100% ancho × 260–500 px alto", "Carousel"),
                ]
            },
            {
                "name": "Tabla Balística (3 idiomas)",
                "images": [
                    ("Tabla_Balistica_PG_2025-ES.png", "/Tabla_Balistica_PG_2025-ES.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-EN.png", "/Tabla_Balistica_PG_2025-EN.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-PT.png", "/Tabla_Balistica_PG_2025-PT.png", "100% ancho responsive", "Table"),
                ]
            },
            {
                "name": "Fondo Formulario de Contacto",
                "images": [
                    ("bg_form_contact@2x.png", "/bg_form_contact@2x.png", "100% ancho × 100% alto (cover absoluto)", "Background"),
                ]
            },
        ]
    },
    {
        "title": "SuperSlim",
        "route": "/superslim",
        "category": "Producto",
        "sections": [
            {
                "name": "Hero Carrusel (4 slides — rota cada 4 s)",
                "images": [
                    ("HeroPGSuperSlim-1.png", "/HeroPGSuperSlim-1.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGSuperSlim-2.png", "/HeroPGSuperSlim-2.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGSuperSlim-3.png", "/HeroPGSuperSlim-3.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGSuperSlim-4.png", "/HeroPGSuperSlim-4.png", "100% ancho × 500–740 px alto", "Hero"),
                ]
            },
            {
                "name": "Logo / Badge",
                "images": [
                    ("SuperSlimlogo.png", "/lovable-uploads/SuperSlimlogo.png", "180–389 px ancho × auto alto", "Logo"),
                ]
            },
            {
                "name": "Tabs de contenido (4 tabs)",
                "images": [
                    ("TabsPGSuperSlim-1.png",            "/TabsPGSuperSlim-1.png",            "100% ancho × 260–500 px alto", "Tab Image"),
                    ("TabsPGSuperSlim-2.png",            "/TabsPGSuperSlim-2.png",            "100% ancho × 260–500 px alto", "Tab Image"),
                    ("TabsTecnologiaPGSuperSlim-3.png",  "/TabsTecnologiaPGSuperSlim-3.png",  "100% ancho × 260–500 px alto", "Tab Image"),
                    ("TabsEspecificacionesSuperSlim-4.png","/TabsEspecificacionesSuperSlim-4.png","100% ancho × 260–500 px alto","Tab Image"),
                ]
            },
            {
                "name": "Casos de Uso — Carrusel (3 slides)",
                "images": [
                    ("CasosdeUsoPGSuperSlim-1.png", "/CasosdeUsoPGSuperSlim-1.png", "100% ancho × 260–500 px alto", "Carousel"),
                    ("CasosdeUsoPGSuperSlim-2.png", "/CasosdeUsoPGSuperSlim-2.png", "100% ancho × 260–500 px alto", "Carousel"),
                    ("CasosdeUsoPGSuperSlim-3.png", "/CasosdeUsoPGSuperSlim-3.png", "100% ancho × 260–500 px alto", "Carousel"),
                ]
            },
            {
                "name": "Tabla Balística (3 idiomas)",
                "images": [
                    ("Tabla_Balistica_PG_2025-ES.png", "/Tabla_Balistica_PG_2025-ES.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-EN.png", "/Tabla_Balistica_PG_2025-EN.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-PT.png", "/Tabla_Balistica_PG_2025-PT.png", "100% ancho responsive", "Table"),
                ]
            },
            {
                "name": "Fondo Formulario de Contacto",
                "images": [
                    ("bg_form_contact@2x.png", "/bg_form_contact@2x.png", "100% ancho × 100% alto (cover absoluto)", "Background"),
                ]
            },
        ]
    },
    {
        "title": "Ultra",
        "route": "/ultra",
        "category": "Producto",
        "sections": [
            {
                "name": "Hero Carrusel (6 slides — rota cada 4 s)",
                "images": [
                    ("HeroPGUltra-1.png", "/HeroPGUltra-1.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGUltra-2.png", "/HeroPGUltra-2.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGUltra-3.png", "/HeroPGUltra-3.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGUltra-4.png", "/HeroPGUltra-4.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGUltra-5.png", "/HeroPGUltra-5.png", "100% ancho × 500–740 px alto", "Hero"),
                    ("HeroPGUltra-6.png", "/HeroPGUltra-6.png", "100% ancho × 500–740 px alto", "Hero"),
                ]
            },
            {
                "name": "Logo / Badge",
                "images": [
                    ("Ultralogo.png", "/lovable-uploads/Ultralogo.png", "180–389 px ancho × auto alto", "Logo"),
                ]
            },
            {
                "name": "Tabs de contenido (4 tabs)",
                "images": [
                    ("TabsPGUltra-1.png",              "/TabsPGUltra-1.png",              "100% ancho × 260–500 px alto", "Tab Image"),
                    ("TabsPGUltra-2.png",              "/TabsPGUltra-2.png",              "100% ancho × 260–500 px alto", "Tab Image"),
                    ("TabsTecnologiaPGUltra-3.png",    "/TabsTecnologiaPGUltra-3.png",    "100% ancho × 260–500 px alto", "Tab Image"),
                    ("TabsEspecificacionesPGUltra-4.png","/TabsEspecificacionesPGUltra-4.png","100% ancho × 260–500 px alto","Tab Image"),
                ]
            },
            {
                "name": "Casos de Uso — Carrusel (3 slides)",
                "images": [
                    ("CasosdeUsoPGUltra-1.png", "/CasosdeUsoPGUltra-1.png", "100% ancho × 260–500 px alto", "Carousel"),
                    ("CasosdeUsoPGUltra-2.png", "/CasosdeUsoPGUltra-2.png", "100% ancho × 260–500 px alto", "Carousel"),
                    ("CasosdeUsoPGUltra-3.png", "/CasosdeUsoPGUltra-3.png", "100% ancho × 260–500 px alto", "Carousel"),
                ]
            },
            {
                "name": "Tabla Balística (3 idiomas)",
                "images": [
                    ("Tabla_Balistica_PG_2025-ES.png", "/Tabla_Balistica_PG_2025-ES.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-EN.png", "/Tabla_Balistica_PG_2025-EN.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-PT.png", "/Tabla_Balistica_PG_2025-PT.png", "100% ancho responsive", "Table"),
                ]
            },
            {
                "name": "Fondo Formulario de Contacto",
                "images": [
                    ("bg_form_contact@2x.png", "/bg_form_contact@2x.png", "100% ancho × 100% alto (cover absoluto)", "Background"),
                ]
            },
        ]
    },
    {
        "title": "Historia",
        "route": "/historia",
        "category": "Nosotros",
        "sections": [
            {
                "name": "Header principal",
                "images": [
                    ("header_about_2026.png", "/header_about_2026.png", "100% ancho × auto alto", "Hero"),
                ]
            },
            {
                "name": "Timeline — Carrusel de imágenes",
                "images": [
                    ("tchelao05_RJ.jpg", "/lovable-uploads/tchelao05_RJ.jpg", "100% ancho × 200–334 px alto", "Carousel"),
                ]
            },
            {
                "name": "Nuestra Planta — Brasil (rota cada 2 s)",
                "images": [
                    ("ourplantbr_1.jpg", "/ourplantbr_1.jpg", "100% ancho × 256 px alto (h-64)", "Carousel"),
                    ("ourplantbr_2.jpg", "/ourplantbr_2.jpg", "100% ancho × 256 px alto (h-64)", "Carousel"),
                    ("ourplantbr_3.jpg", "/ourplantbr_3.jpg", "100% ancho × 256 px alto (h-64)", "Carousel"),
                ]
            },
            {
                "name": "Nuestra Planta — México (rota cada 2 s)",
                "images": [
                    ("ourplantmx_1.jpg", "/ourplantmx_1.jpg", "100% ancho × 256 px alto (h-64)", "Carousel"),
                    ("ourplantmx_2.jpg", "/ourplantmx_2.jpg", "100% ancho × 256 px alto (h-64)", "Carousel"),
                    ("ourplantmx_3.jpg", "/ourplantmx_3.jpg", "100% ancho × 256 px alto (h-64)", "Carousel"),
                ]
            },
            {
                "name": "Nuestra Gente — Carrusel (rota cada 3 s)",
                "images": [
                    ("ourpeople_1.jpg",  "/ourpeople_1.jpg",  "100% ancho × auto alto", "Carousel"),
                    ("ourpeople_2.jpeg", "/ourpeople_2.jpeg", "100% ancho × auto alto", "Carousel"),
                    ("ourpeople_3.jpg",  "/ourpeople_3.jpg",  "100% ancho × auto alto", "Carousel"),
                    ("ourpeople_4.jpg",  "/ourpeople_4.jpg",  "100% ancho × auto alto", "Carousel"),
                ]
            },
            {
                "name": "Fondo Formulario de Contacto",
                "images": [
                    ("bg_form_contact@2x.png", "/bg_form_contact@2x.png", "100% ancho × 100% alto (cover absoluto)", "Background"),
                ]
            },
        ]
    },
    {
        "title": "PG DNA",
        "route": "/pgdna",
        "category": "Nosotros",
        "sections": [
            {
                "name": "Hero",
                "images": [
                    ("hero_about_pg_glass@2x.png", "/lovable-uploads/hero_about_pg_glass@2x.png", "100% ancho × 100% alto (object-cover)", "Hero"),
                ]
            },
            {
                "name": "Sección ADN",
                "images": [
                    ("Adn_pg@2x.png", "/lovable-uploads/Adn_pg@2x.png", "auto ancho × auto alto (max 100%)", "Content Image"),
                ]
            },
            {
                "name": "Iconos de características (4 iconos, 64×64 px)",
                "images": [
                    ("bullet_ico 1.svg",   "/bullet_ico 1.svg",   "64 × 64 px", "Icon"),
                    ("geometry_ico 1.svg", "/geometry_ico 1.svg", "64 × 64 px", "Icon"),
                    ("finish_ico 1.svg",   "/finish_ico 1.svg",   "64 × 64 px", "Icon"),
                    ("optics_ico 1.svg",   "/optics_ico 1.svg",   "64 × 64 px", "Icon"),
                ]
            },
            {
                "name": "Fondo sección Formulación",
                "images": [
                    ("bg_formulacion_pg@2x.png", "/lovable-uploads/bg_formulacion_pg@2x.png", "100% ancho × auto alto", "Background"),
                ]
            },
            {
                "name": "Imagen I+D",
                "images": [
                    ("RnD_image@2x.png", "/RnD_image@2x.png", "100% ancho × auto alto", "Content Image"),
                ]
            },
            {
                "name": "Cards de Productos — Fondo (600 px alto)",
                "images": [
                    ("Glassguard_card.png",  "/Glassguard_card.png",  "100% ancho × 600 px alto", "Card Background"),
                    ("Superslim_card.png",   "/Superslim_card.png",   "100% ancho × 600 px alto", "Card Background"),
                    ("Steelglass_card.png",  "/Steelglass_card.png",  "100% ancho × 600 px alto", "Card Background"),
                    ("Neu_card.png",         "/Neu_card.png",         "100% ancho × 600 px alto", "Card Background"),
                    ("Ultra_card.png",       "/Ultra_card.png",       "100% ancho × 600 px alto", "Card Background"),
                ]
            },
            {
                "name": "Logos en Cards de Productos (overlay SVG)",
                "images": [
                    ("new-card-logoPG-GlassGuard.svg",  "/new-card-logoPG-GlassGuard.svg",  "máx 280 px ancho × auto", "Logo"),
                    ("new-card-logo-PG-Superslim.svg",  "/new-card-logo-PG-Superslim.svg",  "máx 280 px ancho × auto", "Logo"),
                    ("new-card-logo-PG-SteelGlass.svg", "/new-card-logo-PG-SteelGlass.svg", "máx 280 px ancho × auto", "Logo"),
                    ("PG Neu.svg",                      "/PG Neu.svg",                      "máx 280 px ancho × auto", "Logo"),
                    ("PG Ultra.svg",                    "/PG Ultra.svg",                    "máx 280 px ancho × auto", "Logo"),
                ]
            },
            {
                "name": "Fondo Formulario de Contacto",
                "images": [
                    ("bg_form_contact@2x.png", "/bg_form_contact@2x.png", "100% ancho × 100% alto (cover absoluto)", "Background"),
                ]
            },
        ]
    },
    {
        "title": "PG Military",
        "route": "/pgmilitary",
        "category": "Aplicación",
        "sections": [
            {
                "name": "Hero",
                "images": [
                    ("steelglassfototechnology.jpg", "/steelglassfototechnology.jpg", "100% ancho × 350–442 px alto", "Hero"),
                ]
            },
            {
                "name": "Imagen de contenido",
                "images": [
                    ("IMG_4421.jpg", "/lovable-uploads/IMG_4421.jpg", "100% ancho × 300–508 px alto", "Content Image"),
                ]
            },
            {
                "name": "Logo empresa (encabezado de tabla)",
                "images": [
                    ("LogoPGPRODUCTSPGBLUE.png", "/LogoPGPRODUCTSPGBLUE.png", "auto ancho × 32–40 px alto", "Logo"),
                ]
            },
            {
                "name": "Tabla de armamento (5 imágenes)",
                "images": [
                    ("weapon_1.png", "/lovable-uploads/weapon_1.png", "máx 100% ancho × 80–96 px alto", "Table Image"),
                    ("weapon_2.png", "/lovable-uploads/weapon_2.png", "máx 100% ancho × 80–96 px alto", "Table Image"),
                    ("weapon_3.png", "/lovable-uploads/weapon_3.png", "máx 100% ancho × 80–96 px alto", "Table Image"),
                    ("weapon_4.png", "/lovable-uploads/weapon_4.png", "máx 100% ancho × 80–96 px alto", "Table Image"),
                    ("weapon_5.png", "/lovable-uploads/weapon_5.png", "máx 100% ancho × 80–96 px alto", "Table Image"),
                ]
            },
            {
                "name": "Fondo Formulario de Contacto",
                "images": [
                    ("bg_form_contact@2x.png", "/bg_form_contact@2x.png", "100% ancho × 100% alto (cover absoluto)", "Background"),
                ]
            },
        ]
    },
    {
        "title": "PG Ballistics",
        "route": "/pgballistics",
        "category": "Aplicación",
        "sections": [
            {
                "name": "Hero",
                "images": [
                    ("vidrio_disparos.avif", "/lovable-uploads/vidrio_disparos.avif", "100% ancho × 400–700 px alto", "Hero"),
                ]
            },
            {
                "name": "Galería — Carrusel (3 imágenes)",
                "images": [
                    ("vidrio_disparos.avif",      "/lovable-uploads/vidrio_disparos.avif", "100% ancho × 260–508 px alto", "Gallery"),
                    ("steelglassfotocarrusel0.jpg","/steelglassfotocarrusel0.jpg",          "100% ancho × 260–508 px alto", "Gallery"),
                    ("steelglassfototechnology.jpg","/steelglassfototechnology.jpg",        "100% ancho × 260–508 px alto", "Gallery"),
                ]
            },
            {
                "name": "Logo empresa",
                "images": [
                    ("LogoPGPRODUCTSPGBLUE.png", "/LogoPGPRODUCTSPGBLUE.png", "auto ancho × 32–40 px alto", "Logo"),
                ]
            },
            {
                "name": "Tabla Balística (3 idiomas)",
                "images": [
                    ("Tabla_Balistica_PG_2025-ES.png", "/Tabla_Balistica_PG_2025-ES.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-EN.png", "/Tabla_Balistica_PG_2025-EN.png", "100% ancho responsive", "Table"),
                    ("Tabla_Balistica_PG_2025-PT.png", "/Tabla_Balistica_PG_2025-PT.png", "100% ancho responsive", "Table"),
                ]
            },
            {
                "name": "Video (no imagen)",
                "images": [
                    ("video.mp4", "/video.mp4", "100% ancho × 100% alto", "Video"),
                ]
            },
            {
                "name": "Logo overlay sobre video",
                "images": [
                    ("8edefffc-7a49-492b-acc8-65267634f930.png",
                     "/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png",
                     "160–479 px ancho × auto alto", "Logo"),
                ]
            },
        ]
    },
    {
        "title": "PG Automotive",
        "route": "/pgautomotive",
        "category": "Aplicación",
        "sections": [
            {
                "name": "Hero",
                "images": [
                    ("steelglassfotocarrusel0.jpg", "/steelglassfotocarrusel0.jpg", "100% ancho × 350–442 px alto", "Hero"),
                ]
            },
            {
                "name": "Card — Retrofit",
                "images": [
                    ("steelglassfotocarrusel0.jpg", "/steelglassfotocarrusel0.jpg", "100% ancho × 280–360 px alto", "Card Image"),
                ]
            },
            {
                "name": "Card — OEM",
                "images": [
                    ("steelgalsslogopagev1.jpeg", "/lovable-uploads/steelgalsslogopagev1.jpeg", "100% ancho × 280–360 px alto", "Card Image"),
                ]
            },
            {
                "name": "Fondo Formulario de Contacto",
                "images": [
                    ("bg_form_contact@2x.png", "/bg_form_contact@2x.png", "100% ancho × 100% alto (cover absoluto)", "Background"),
                ]
            },
        ]
    },
    {
        "title": "PG Architectural",
        "route": "/pgarchitectural",
        "category": "Aplicación",
        "sections": [
            {
                "name": "Hero",
                "images": [
                    ("IMG_4473.jpg", "/lovable-uploads/IMG_4473.jpg", "100% ancho × 350–442 px alto", "Hero"),
                ]
            },
            {
                "name": "Imagen — Edificios gubernamentales",
                "images": [
                    ("IMG_4544.jpg", "/lovable-uploads/IMG_4544.jpg", "100% ancho × 280–508 px alto", "Content Image"),
                ]
            },
            {
                "name": "Imagen — Instalaciones corporativas",
                "images": [
                    ("IMG_4421.jpg", "/lovable-uploads/IMG_4421.jpg", "100% ancho × 280–508 px alto", "Content Image"),
                ]
            },
            {
                "name": "Logo empresa",
                "images": [
                    ("LogoPGPRODUCTSPGBLUE.png", "/LogoPGPRODUCTSPGBLUE.png", "auto ancho × 32–40 px alto", "Logo"),
                ]
            },
            {
                "name": "Tabla de armamento (5 imágenes)",
                "images": [
                    ("weapon_1.png", "/lovable-uploads/weapon_1.png", "máx 100% ancho × 80–96 px alto", "Table Image"),
                    ("weapon_2.png", "/lovable-uploads/weapon_2.png", "máx 100% ancho × 80–96 px alto", "Table Image"),
                    ("weapon_3.png", "/lovable-uploads/weapon_3.png", "máx 100% ancho × 80–96 px alto", "Table Image"),
                    ("weapon_4.png", "/lovable-uploads/weapon_4.png", "máx 100% ancho × 80–96 px alto", "Table Image"),
                    ("weapon_5.png", "/lovable-uploads/weapon_5.png", "máx 100% ancho × 80–96 px alto", "Table Image"),
                ]
            },
            {
                "name": "Fondo Formulario de Contacto",
                "images": [
                    ("bg_form_contact@2x.png", "/bg_form_contact@2x.png", "100% ancho × 100% alto (cover absoluto)", "Background"),
                ]
            },
        ]
    },
    {
        "title": "Contacto",
        "route": "/contact",
        "category": "General",
        "sections": [
            {
                "name": "Patrón de fondo — Hero",
                "images": [
                    ("contact-pattern.jpg", "/lovable-uploads/contact-pattern.jpg", "100% cover (opacidad 10%)", "Background"),
                ]
            },
            {
                "name": "Fondo — Sección CTA",
                "images": [
                    ("dab51236-9306-4c50-b326-1e2f347360ca.png",
                     "/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png",
                     "100% ancho × 100% alto (opacidad 20%)", "Background"),
                ]
            },
        ]
    },
]

# ── Count totals ──────────────────────────────────────────────────────────────
all_files = []
for pg in PAGES:
    for sec in pg["sections"]:
        for img in sec["images"]:
            all_files.append(img[0])

unique_files   = len(set(all_files))
total_images   = len(all_files)
shared_files   = len([f for f in set(all_files) if all_files.count(f) > 1])

# ══════════════════════════════════════════════════════════════════════════════
#  DOCUMENT BUILD
# ══════════════════════════════════════════════════════════════════════════════

# ── Cover / Title ─────────────────────────────────────────────────────────────
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p.add_run("PG PRODUCTS")
run.bold = True
run.font.size = Pt(28)
run.font.color.rgb = NAVY

p2 = doc.add_paragraph()
p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
run2 = p2.add_run("Mapa de Imágenes del Sitio Web")
run2.bold = True
run2.font.size = Pt(18)
run2.font.color.rgb = BLUE

p3 = doc.add_paragraph()
p3.alignment = WD_ALIGN_PARAGRAPH.CENTER
run3 = p3.add_run("Guía de referencia para el equipo de contenido — Marzo 2026")
run3.font.size = Pt(10)
run3.font.color.rgb = DGRAY
run3.italic = True

doc.add_paragraph()

# ── Stats bar ────────────────────────────────────────────────────────────────
stats_tbl = doc.add_table(rows=1, cols=3)
stats_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
stats_tbl.style = 'Table Grid'

stats = [
    (str(len(PAGES)), "Páginas incluidas"),
    (str(unique_files), "Archivos únicos"),
    (str(shared_files), "Archivos compartidos"),
]
for i, (val, label) in enumerate(stats):
    c = stats_tbl.cell(0, i)
    set_cell_bg(c, NAVY)
    p = c.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = p.add_run(f'{val}\n')
    r1.bold = True
    r1.font.size = Pt(22)
    r1.font.color.rgb = WHITE
    r2 = p.add_run(label)
    r2.font.size = Pt(9)
    r2.font.color.rgb = RGBColor(0xA0, 0xB4, 0xD0)
    c.paragraphs[0].paragraph_format.space_before = Pt(6)
    c.paragraphs[0].paragraph_format.space_after  = Pt(6)

doc.add_paragraph()

# ── Key notes ─────────────────────────────────────────────────────────────────
note_tbl = doc.add_table(rows=1, cols=1)
note_tbl.style = 'Table Grid'
nc = note_tbl.cell(0, 0)
set_cell_bg(nc, RGBColor(0xE8, 0xF0, 0xFF))
np_ = nc.paragraphs[0]
np_.alignment = WD_ALIGN_PARAGRAPH.LEFT
r = np_.add_run("Notas importantes\n")
r.bold = True
r.font.size = Pt(10)
r.font.color.rgb = NAVY

notes = [
    "Archivos en /public  →  se referencian como  /nombre-archivo.ext",
    "Archivos en /public/lovable-uploads/  →  se referencian como  /lovable-uploads/nombre-archivo.ext",
    "La Tabla_Balistica_PG_2025 existe en 3 variantes de idioma: -ES.png (Español) · -EN.png (Inglés) · -PT.png (Portugués)",
    "bg_form_contact@2x.png  es compartida por TODAS las páginas de producto como fondo del formulario de contacto",
    "Archivos marcados con @2x son versiones de alta resolución (retina/HiDPI)",
]
for n in notes:
    r2 = np_.add_run(f"• {n}\n")
    r2.font.size = Pt(9)
    r2.font.color.rgb = BLACK

nc.paragraphs[0].paragraph_format.space_before = Pt(4)
nc.paragraphs[0].paragraph_format.space_after  = Pt(4)

doc.add_paragraph()

# ── Legend ────────────────────────────────────────────────────────────────────
add_heading(doc, "Leyenda de tipos de imagen", level=2)

legend_items = list(BADGE.items())
cols = 4
rows_needed = (len(legend_items) + cols - 1) // cols
leg_tbl = doc.add_table(rows=rows_needed, cols=cols)
leg_tbl.style = 'Table Grid'

for idx, (label, color) in enumerate(legend_items):
    row = idx // cols
    col = idx % cols
    c = leg_tbl.cell(row, col)
    set_cell_bg(c, color)
    cell_para(c, label, bold=True, size=9, color=WHITE, align=WD_ALIGN_PARAGRAPH.CENTER)

# fill empty cells
total_cells = rows_needed * cols
for idx in range(len(legend_items), total_cells):
    row = idx // cols
    col = idx % cols
    c = leg_tbl.cell(row, col)
    set_cell_bg(c, RGBColor(0xF0, 0xF0, 0xF0))
    cell_para(c, "", size=9, color=DGRAY)

doc.add_paragraph()
doc.add_page_break()

# ══════════════════════════════════════════════════════════════════════════════
#  PAGES
# ══════════════════════════════════════════════════════════════════════════════

CAT_COLOR = {
    "Producto":    RGBColor(0x00, 0x5C, 0xE8),
    "Nosotros":    RGBColor(0x16, 0x83, 0x6A),
    "Aplicación":  RGBColor(0x9B, 0x2D, 0x2D),
    "General":     RGBColor(0x55, 0x65, 0x7A),
}

for page_idx, page in enumerate(PAGES):
    # ── Page heading ──────────────────────────────────────────────────────────
    h_tbl = doc.add_table(rows=1, cols=2)
    h_tbl.style = 'Table Grid'

    cat_color = CAT_COLOR.get(page["category"], NAVY)

    left = h_tbl.cell(0, 0)
    set_cell_bg(left, NAVY)
    lp = left.paragraphs[0]
    lp.alignment = WD_ALIGN_PARAGRAPH.LEFT
    r1 = lp.add_run(page["title"])
    r1.bold = True
    r1.font.size = Pt(16)
    r1.font.color.rgb = WHITE
    r2 = lp.add_run(f"  {page['route']}")
    r2.font.size = Pt(10)
    r2.font.color.rgb = RGBColor(0x80, 0xA0, 0xD0)

    right = h_tbl.cell(0, 1)
    set_cell_bg(right, cat_color)
    cell_para(right, page["category"], bold=True, size=10, color=WHITE, align=WD_ALIGN_PARAGRAPH.CENTER)
    right.width = Inches(1.2)

    left.paragraphs[0].paragraph_format.space_before = Pt(5)
    left.paragraphs[0].paragraph_format.space_after  = Pt(5)

    doc.add_paragraph()

    for section in page["sections"]:
        # Section sub-heading
        add_heading(doc, section["name"], level=3)

        # Images table: columns → #, Nombre archivo, Ruta en código, Dimensiones, Tipo
        img_tbl = doc.add_table(rows=1, cols=5)
        img_tbl.style = 'Table Grid'
        img_tbl.alignment = WD_TABLE_ALIGNMENT.LEFT

        # Header row
        headers = ["#", "Nombre de archivo", "Ruta en el código", "Dimensiones del contenedor", "Tipo"]
        hrow = img_tbl.rows[0]
        for i, h in enumerate(headers):
            c = hrow.cells[i]
            set_cell_bg(c, NAVY)
            cell_para(c, h, bold=True, size=9, color=WHITE, align=WD_ALIGN_PARAGRAPH.CENTER)

        # Data rows
        for img_i, (filename, path, dims, img_type) in enumerate(section["images"]):
            row = img_tbl.add_row()
            badge_color = BADGE.get(img_type, DGRAY)

            # #
            cell_para(row.cells[0], str(img_i + 1), size=9, color=DGRAY, align=WD_ALIGN_PARAGRAPH.CENTER)
            set_cell_bg(row.cells[0], LGRAY if img_i % 2 == 0 else WHITE)

            # Filename
            c1 = row.cells[1]
            set_cell_bg(c1, LGRAY if img_i % 2 == 0 else WHITE)
            p_ = c1.paragraphs[0]
            r_ = p_.add_run(filename)
            r_.bold = True
            r_.font.size = Pt(9)
            r_.font.color.rgb = BLACK
            r_.font.name = 'Courier New'

            # Path
            c2 = row.cells[2]
            set_cell_bg(c2, LGRAY if img_i % 2 == 0 else WHITE)
            p2_ = c2.paragraphs[0]
            r2_ = p2_.add_run(path)
            r2_.font.size = Pt(8)
            r2_.font.color.rgb = DGRAY
            r2_.font.name = 'Courier New'

            # Dimensions
            c3 = row.cells[3]
            set_cell_bg(c3, LGRAY if img_i % 2 == 0 else WHITE)
            cell_para(c3, dims, size=9, color=BLACK)

            # Type badge
            c4 = row.cells[4]
            set_cell_bg(c4, badge_color)
            cell_para(c4, img_type, bold=True, size=8, color=WHITE, align=WD_ALIGN_PARAGRAPH.CENTER)

        # Column widths
        for row in img_tbl.rows:
            row.cells[0].width = Inches(0.3)
            row.cells[1].width = Inches(2.5)
            row.cells[2].width = Inches(2.5)
            row.cells[3].width = Inches(2.0)
            row.cells[4].width = Inches(1.0)

        doc.add_paragraph()

    if page_idx < len(PAGES) - 1:
        doc.add_page_break()

# ── Save ──────────────────────────────────────────────────────────────────────
out = "/Users/fernandogarciamontes/Desktop/premium-armor-glass/PG_Products_ImageMap.docx"
doc.save(out)
print(f"Saved → {out}")
