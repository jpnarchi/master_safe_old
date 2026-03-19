from docx import Document
from docx.shared import Pt, RGBColor, Inches, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

doc = Document()

# ── Margins ───────────────────────────────────────────────────────────────────
for section in doc.sections:
    section.top_margin    = Cm(2)
    section.bottom_margin = Cm(2)
    section.left_margin   = Cm(2.5)
    section.right_margin  = Cm(2.5)

# ── Colors ────────────────────────────────────────────────────────────────────
NAVY  = RGBColor(0x0A, 0x14, 0x2E)
BLUE  = RGBColor(0x00, 0x5C, 0xE8)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
LGRAY = RGBColor(0xF4, 0xF6, 0xFA)
DGRAY = RGBColor(0x55, 0x65, 0x7A)
BLACK = RGBColor(0x11, 0x18, 0x27)
GREEN = RGBColor(0x16, 0xA3, 0x4A)
AMBER = RGBColor(0xD4, 0x9A, 0x00)
RED   = RGBColor(0xC0, 0x32, 0x20)
TEAL  = RGBColor(0x0D, 0x9E, 0x8A)
PURP  = RGBColor(0x7C, 0x3A, 0xED)

# Element-type → badge color
ELEM_COLOR = {
    "Título":        BLUE,
    "Subtítulo":     TEAL,
    "Párrafo":       DGRAY,
    "Botón":         GREEN,
    "Label":         AMBER,
    "Placeholder":   RGBColor(0x94, 0xA3, 0xB8),
    "Tab":           PURP,
    "Beneficio":     RGBColor(0x20, 0x7C, 0xDC),
    "Caso de uso":   RED,
    "Descarga":      RGBColor(0x64, 0x74, 0x8B),
    "Característica":RGBColor(0x0E, 0x7A, 0x50),
    "Toast":         RGBColor(0xC0, 0x59, 0x21),
    "Nota":          RGBColor(0x57, 0x53, 0x4E),
    "Común":         RGBColor(0x33, 0x33, 0x55),
}

CAT_COLOR = {
    "Producto":    BLUE,
    "Nosotros":    TEAL,
    "Aplicación":  RED,
    "General":     DGRAY,
    "Compartido":  PURP,
}

# ── Helpers ───────────────────────────────────────────────────────────────────
def set_cell_bg(cell, rgb):
    tc   = cell._tc
    tcPr = tc.get_or_add_tcPr()
    shd  = OxmlElement('w:shd')
    shd.set(qn('w:val'),   'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'),  str(rgb))
    tcPr.append(shd)

def cell_para(cell, text, bold=False, size=9, color=BLACK, align=WD_ALIGN_PARAGRAPH.LEFT):
    cell.paragraphs[0].clear()
    p   = cell.paragraphs[0]
    p.alignment = align
    run = p.add_run(text)
    run.bold           = bold
    run.font.size      = Pt(size)
    run.font.color.rgb = color
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after  = Pt(2)
    return p

def add_section_heading(doc, text):
    p   = doc.add_paragraph()
    run = p.add_run(f"▸  {text}")
    run.bold           = True
    run.font.size      = Pt(10.5)
    run.font.color.rgb = DGRAY
    p.paragraph_format.space_before = Pt(8)
    p.paragraph_format.space_after  = Pt(3)

def add_note(doc, text):
    p   = doc.add_paragraph()
    run = p.add_run(f"ℹ  {text}")
    run.font.size      = Pt(8.5)
    run.font.color.rgb = DGRAY
    run.italic         = True
    p.paragraph_format.space_after = Pt(3)

# ── Text data ─────────────────────────────────────────────────────────────────
# Each item: (element_type, es_text, en_text, pt_text)
# '' means same as ES or not yet translated

PAGES = [

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "PG GlassGuard", "route": "/glassguard", "category": "Producto",
"sections": [
  {"name": "Hero", "items": [
    ("Subtítulo", "Vidrio premium de resistencia balística certificada", "Premium ballistic-certified glass", "Vidro premium de resistência balística certificada"),
    ("Título",    "PG GlassGuard", "PG GlassGuard", "PG GlassGuard"),
    ("Párrafo",   "GlassGuard compone un portafolio de soluciones de blindaje transparente según normas locales e internacionales para diferentes aplicaciones de alta especificación, además está formulado con materiales avanzados y procesos detallados. El producto PG cuenta con experiencia y gestión de calidad certificada ISO 9001.",
                  "GlassGuard offers a portfolio of transparent armoring solutions according to local and international standards for high-spec applications, formulated with advanced materials and detailed processes.",
                  "GlassGuard compõe um portfólio de soluções de blindagem transparente conforme normas locais e internacionais."),
  ]},
  {"name": "Key Benefits (5 beneficios)", "items": [
    ("Beneficio", "Balística: Formulaciones diseñadas para soportar diferentes tipos de amenazas.", "Ballistics: Formulations designed to withstand different types of threats.", "Balística: Formulações projetadas para suportar diferentes tipos de ameaças."),
    ("Beneficio", "Óptica: Visión clara y sin distorsiones.", "Optics: Clear, undistorted vision.", "Óptica: Visão clara e sem distorções."),
    ("Beneficio", "Durabilidad: Composición única enfocada a extender su vida útil.", "Durability: Unique composition focused on extending service life.", "Durabilidade: Composição única focada em estender a vida útil."),
    ("Beneficio", "Originalidad: Adaptable a cualquier plataforma vehicular.", "Originality: Adaptable to any vehicle platform.", "Originalidade: Adaptável a qualquer plataforma veicular."),
    ("Beneficio", "Seguridad: Vidrios certificados según normas internacionales.", "Safety: Glasses certified to international standards.", "Segurança: Vidros certificados segundo normas internacionais."),
  ]},
  {"name": "Tabs de contenido", "items": [
    ("Tab", "PG Glass Guard", "PG Glass Guard", "PG Glass Guard"),
    ("Tab", "Composición", "Composition", "Composição"),
    ("Tab", "Tecnología", "Technology", "Tecnologia"),
    ("Tab", "Especificaciones", "Specifications", "Especificações"),
    ("Párrafo", "PG desarrolla soluciones de vidrio blindado para diferentes aplicaciones basadas en normas balísticas vigentes con formulaciones avanzadas...", "PG develops armored glass solutions for different applications based on current ballistic standards...", "PG desenvolve soluções de vidro blindado para diferentes aplicações..."),
    ("Párrafo", "La composición de GlassGuard se desarrolla con materiales certificados y procesos detallados para asegurar el ADN de PG...", "GlassGuard composition is developed with certified materials and detailed processes...", "A composição do GlassGuard é desenvolvida com materiais certificados e processos detalhados..."),
    ("Párrafo", "Todas las composiciones de GlassGuard pueden ser complementados con accesorios originales: redes desempañantes, adaptaciones para cámaras y sensores, gunports, etc.", "All GlassGuard compositions can be complemented with original accessories: defrost nets, camera/sensor adaptations, gunports, etc.", "Todas as composições do GlassGuard podem ser complementadas com acessórios originais."),
    ("Párrafo", "Especificaciones técnicas: NATO STANAG, ABNT NBR 15000, CEN 1063, NIJ 0108.01, RENAR MA.02, VPAM. Laboratorios en Alemania, Argentina, Brasil, EE.UU. y Países Bajos.", "Technical specs: NATO STANAG, ABNT NBR 15000, CEN 1063, NIJ 0108.01, RENAR MA.02, VPAM. Labs in Germany, Argentina, Brazil, USA, Netherlands.", "Especificações técnicas: NATO STANAG, ABNT NBR 15000, CEN 1063, NIJ 0108.01, RENAR MA.02, VPAM."),
  ]},
  {"name": "Casos de Uso (3 cards)", "items": [
    ("Caso de uso", "Aplicaciones blindaje civil y Gubernamental — Soluciones certificadas para protección de vehículos oficiales y de gobierno.", "Civil and Government armoring applications — Certified solutions for official vehicles.", "Aplicações de blindagem civil e governamental."),
    ("Caso de uso", "Transporte de valores — Descubra cómo GlassGuard ofrece soluciones de blindaje personalizadas para vehículos de transporte de valores.", "Value transport — Discover how GlassGuard offers custom armoring for cash-in-transit vehicles.", "Transporte de valores — Soluções de blindagem personalizadas."),
    ("Caso de uso", "Botes y aplicaciones marítimas — Protección para aplicaciones marítimas de alta gama, yates y fragatas.", "Boats and maritime applications — Protection for high-end maritime applications, yachts and frigates.", "Barcos e aplicações marítimas — Proteção para iates e fragatas."),
  ]},
  {"name": "Descargas", "items": [
    ("Descarga", "Brochure de producto PG GlassGuard.pdf", "Product Brochure PG GlassGuard.pdf", "Brochure do produto PG GlassGuard.pdf"),
    ("Descarga", "Tabla balística para PG GlassGuard.pdf", "Ballistic chart for PG GlassGuard.pdf", "Tabela balística para PG GlassGuard.pdf"),
  ]},
]},

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "PG Neu", "route": "/neu", "category": "Producto",
"sections": [
  {"name": "Hero", "items": [
    ("Subtítulo", "Vidrio Blindado premium con resistencia balística Destacada", "Premium armored glass with outstanding ballistic resistance", "Vidro blindado premium com resistência balística destacada"),
    ("Título",    "PG Neu", "PG Neu", "PG Neu"),
    ("Párrafo",   "NEU representa la evolución en protección balística con tecnología de vanguardia. Un cristal blindado automotriz diseñado con ingeniería Alemana, producido con las mejores materias primas bajo estándares de diseño Europeo.",
                  "NEU represents the evolution in ballistic protection with cutting-edge technology. An automotive armored glass designed with German engineering.",
                  "NEU representa a evolução em proteção balística com tecnologia de ponta e engenharia alemã."),
  ]},
  {"name": "Key Benefits (5 beneficios)", "items": [
    ("Beneficio", "Óptica Destacable: Incorpora nanocompuestos de última generación para máxima protección con visibilidad sin distorsión.", "Outstanding Optics: Incorporates latest-generation nanocomposites.", "Óptica Destacável: Incorpora nanocompostos de última geração."),
    ("Beneficio", "Diseño Innovador: Mayor resistencia, balística comprobada.", "Innovative Design: Greater resistance, proven ballistics.", "Design Inovador: Maior resistência, balística comprovada."),
    ("Beneficio", "Máxima originalidad: Calidad superior en geometría.", "Maximum originality: Superior quality in geometry.", "Máxima originalidade: Qualidade superior em geometria."),
    ("Beneficio", "Futuro del Blindaje: Representa la próxima generación en soluciones de protección balística.", "Future of Armor: Represents the next generation in ballistic protection.", "Futuro do Blindagem: Representa a próxima geração em proteção balística."),
    ("Beneficio", "Durabilidad Superior: Acabados Únicos.", "Superior Durability: Unique finishes.", "Durabilidade Superior: Acabamentos únicos."),
  ]},
  {"name": "Tabs de contenido", "items": [
    ("Tab", "PG Neu", "PG Neu", "PG Neu"),
    ("Tab", "Composición", "Composition", "Composição"),
    ("Tab", "Tecnología", "Technology", "Tecnologia"),
    ("Tab", "Especificaciones", "Specifications", "Especificações"),
    ("Párrafo", "PG Products trae toda la tecnología de un cristal blindado para mercado Europeo ahora disponible en México. Con el espesor de un vidrio de nivel IIIA conseguimos la resistencia balística para munición de arma larga: Menor espesor, Único desempeño Balístico.", "PG Products brings European-market armored glass technology now available in Mexico. With the thickness of level IIIA glass, we achieve ballistic resistance for long-weapon ammunition.", "PG Products traz tecnologia de vidro blindado para o mercado europeu agora disponível no México."),
    ("Párrafo", "Composición única: vidrio flotado, polímeros especiales y policarbonato ultra-ligero. Resistencia: 4 impactos. Munición: 7.62×39mm FMJ.", "Unique composition: float glass, special polymers, ultra-lightweight polycarbonate. Resistance: 4 impacts. Ammo: 7.62×39mm FMJ.", "Composição única: vidro flutuado, polímeros especiais e policarbonato ultra-leve."),
    ("Párrafo", "Además de la parte balística, Neu ofrece Serigrafía Tipo Europeo: Pintura tipo Flat Painting para más visibilidad y discreción. Steel Glass: Acabado único de acero inoxidable.", "In addition to ballistics, Neu offers European-style Serigraphy: Flat Painting for more visibility and discretion. Steel Glass: Unique stainless steel finish.", "Além da parte balística, Neu oferece serigrafía tipo europeu e acabamento em aço inoxidável."),
    ("Párrafo", "Resistencia Balística NIJ III-A. Adicionalmente: 4 impactos 7,62×39mm FMJ (Doble triángulo) ó 2 impactos 7,62×39 MSC.", "Ballistic resistance NIJ III-A. Additionally: 4 impacts 7.62×39mm FMJ or 2 impacts 7.62×39 MSC.", "Resistência balística NIJ III-A. Adicionalmente: 4 impactos 7,62×39mm FMJ."),
  ]},
  {"name": "Casos de Uso (3 cards)", "items": [
    ("Caso de uso", "Aplicaciones blindaje civil y Gubernamental", "Civil and Government armoring applications", "Aplicações de blindagem civil e governamental"),
    ("Caso de uso", "Vehículos de Lujo", "Luxury Vehicles", "Veículos de Luxo"),
    ("Caso de uso", "Aplicaciones Militares Avanzadas", "Advanced Military Applications", "Aplicações Militares Avançadas"),
  ]},
  {"name": "Descargas", "items": [
    ("Descarga", "Brochure de producto PG Neu.pdf", "Product Brochure PG Neu.pdf", "Brochure do produto PG Neu.pdf"),
    ("Descarga", "Tabla balística para PG Neu.pdf", "Ballistic chart for PG Neu.pdf", "Tabela balística para PG Neu.pdf"),
  ]},
]},

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "PG SteelGlass", "route": "/steelglass", "category": "Producto",
"sections": [
  {"name": "Hero", "items": [
    ("Subtítulo", "Vidrio blindado con acero integrado en el contorno", "Armored glass with integrated steel in the perimeter", "Vidro blindado com aço integrado no contorno"),
    ("Título",    "PG SteelGlass", "PG SteelGlass", "PG SteelGlass"),
    ("Párrafo",   "SteelGlass integra un inserto de acero en la formulación, adicionando protección hasta el borde y eliminando la necesidad de overlaps tradicionales.",
                  "SteelGlass integrates a steel insert in the formulation, adding protection to the edge and eliminating the need for traditional overlaps.",
                  "SteelGlass integra um inserto de aço na formulação, adicionando proteção até a borda e eliminando a necessidade de overlaps tradicionais."),
  ]},
  {"name": "Key Benefits (5 beneficios)", "items": [
    ("Beneficio", "Protección del Borde: Inserto de acero integrado que protege hasta el borde del cristal.", "Edge Protection: Integrated steel insert protecting to the glass edge.", "Proteção da Borda: Inserto de aço integrado que protege até a borda do cristal."),
    ("Beneficio", "Sin Overlaps: Elimina la necesidad de extensiones de acero en el marco de la puerta.", "No Overlaps: Eliminates the need for steel extensions on the door frame.", "Sem Overlaps: Elimina a necessidade de extensões de aço no marco da porta."),
    ("Beneficio", "Originalidad: Mantiene el diseño original del vehículo con acabado premium.", "Originality: Maintains the vehicle's original design with premium finish.", "Originalidade: Mantém o design original do veículo com acabamento premium."),
    ("Beneficio", "Refuerzo Estructural: Minimiza rupturas y evita desprendimiento del bloque balístico.", "Structural Reinforcement: Minimizes breakage and prevents ballistic block detachment.", "Reforço Estrutural: Minimiza rupturas e evita desprendimento do bloco balístico."),
    ("Beneficio", "Versatilidad: Aplicable en automotriz, militar y aplicaciones marinas.", "Versatility: Applicable in automotive, military and marine applications.", "Versatilidade: Aplicável em automotivo, militar e aplicações marinas."),
  ]},
  {"name": "Tabs de contenido", "items": [
    ("Tab", "PG Steel Glass", "PG Steel Glass", "PG Steel Glass"),
    ("Tab", "Composición", "Composition", "Composição"),
    ("Tab", "Tecnología", "Technology", "Tecnologia"),
    ("Tab", "Especificaciones", "Specifications", "Especificações"),
    ("Párrafo", "Un cristal blindado que integra en la formulación un inserto de Acero en el contorno adicionando protección hasta el borde. Evita la instalación de Overlaps. Mantiene la originalidad del Vehículo. Acabado Premium. Acero inoxidable integrado.", "An armored glass that integrates a steel insert in the perimeter formulation, adding edge protection. No overlaps needed. Maintains vehicle originality. Premium finish.", "Um cristal blindado que integra um inserto de aço no contorno."),
    ("Párrafo", "Un vidrio blindado con acero insertado en el bloque balístico, dando estructura y resistencia en los bordes eliminando la necesidad del overlap tradicional; manteniendo la originalidad del vehículo.", "An armored glass with steel inserted in the ballistic block, giving structure and edge resistance while eliminating traditional overlaps.", "Um vidro blindado com aço inserido no bloco balístico."),
    ("Párrafo", "Constituye un refuerzo estructural y minimiza rupturas. Bajo agresión, SteelGlass apoya el bloque balístico y evita que se desprenda de la lámina externa.", "Constitutes structural reinforcement and minimizes breakage. Under aggression, SteelGlass supports the ballistic block and prevents it from detaching.", "Constitui um reforço estrutural e minimiza rupturas."),
    ("Párrafo", "Steel Glass incorpora un inserto de protección balística adicional en niveles de armas cortas (hasta NIJ IIIA y B4) y un refuerzo estructural en niveles superiores (NIJ III, DN6, DN7 Y OTROS).", "Steel Glass incorporates additional ballistic protection in handgun levels (up to NIJ IIIA and B4) and structural reinforcement at higher levels (NIJ III, DN6, DN7 AND OTHERS).", "Steel Glass incorpora um inserto de proteção balística adicional nos níveis de armas curtas."),
  ]},
  {"name": "Casos de Uso (3 cards)", "items": [
    ("Caso de uso", "Aplicaciones blindaje civil y Gubernamental", "Civil and Government armoring applications", "Aplicações de blindagem civil e governamental"),
    ("Caso de uso", "Aplicaciones Militares", "Military Applications", "Aplicações Militares"),
    ("Caso de uso", "Protección Marina", "Marine Protection", "Proteção Marina"),
  ]},
  {"name": "Descargas", "items": [
    ("Descarga", "Brochure de producto PG SteelGlass.pdf", "Product Brochure PG SteelGlass.pdf", "Brochure do produto PG SteelGlass.pdf"),
    ("Descarga", "Tabla balística para PG SteelGlass.pdf", "Ballistic chart for PG SteelGlass.pdf", "Tabela balística para PG SteelGlass.pdf"),
  ]},
]},

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "PG SuperSlim", "route": "/superslim", "category": "Producto",
"sections": [
  {"name": "Hero", "items": [
    ("Subtítulo", "Protección balística liviana de alta performance", "Lightweight high-performance ballistic protection", "Proteção balística leve de alta performance"),
    ("Título",    "PG SuperSlim", "PG SuperSlim", "PG SuperSlim"),
    ("Párrafo",   "SuperSlim es un cristal blindado certificado que mantiene la resistencia balística pero con una formulación más delgada que asegura un 15% menos de peso y mayor vida útil.",
                  "SuperSlim is a certified armored glass that maintains ballistic resistance with a thinner formulation ensuring 15% less weight and longer service life.",
                  "SuperSlim é um cristal blindado certificado que mantém a resistência balística com formulação mais fina, 15% menos peso e maior vida útil."),
  ]},
  {"name": "Key Benefits (5 beneficios)", "items": [
    ("Beneficio", "Peso Reducido: Hasta 15% más liviano que vidrios blindados tradicionales.", "Reduced Weight: Up to 15% lighter than traditional armored glass.", "Peso Reduzido: Até 15% mais leve que vidros blindados tradicionais."),
    ("Beneficio", "Máxima Transparencia: Claridad óptica superior sin distorsión.", "Maximum Transparency: Superior optical clarity without distortion.", "Máxima Transparência: Clareza óptica superior sem distorção."),
    ("Beneficio", "Resistencia: Protección balística certificada en formato ultradelgado.", "Resistance: Certified ballistic protection in ultra-thin format.", "Resistência: Proteção balística certificada em formato ultradelgado."),
    ("Beneficio", "Versatilidad: Adaptable a múltiples aplicaciones y diseños.", "Versatility: Adaptable to multiple applications and designs.", "Versatilidade: Adaptável a múltiplas aplicações e designs."),
    ("Beneficio", "Eficiencia: Reduce carga estructural manteniendo la seguridad.", "Efficiency: Reduces structural load while maintaining safety.", "Eficiência: Reduz carga estrutural mantendo a segurança."),
  ]},
  {"name": "Tabs de contenido", "items": [
    ("Tab", "PG SuperSlim", "PG SuperSlim", "PG SuperSlim"),
    ("Tab", "Composición", "Composition", "Composição"),
    ("Tab", "Tecnología", "Technology", "Tecnologia"),
    ("Tab", "Especificaciones", "Specifications", "Especificações"),
    ("Párrafo", "Reducción de peso aproximada por set: 30 kg. Formulación con materiales especiales y polímeros avanzados laminados en ciclos especiales.", "Approximate weight reduction per set: 30 kg. Formulation with special materials and advanced polymers laminated in special cycles.", "Redução de peso aproximada por conjunto: 30 kg."),
    ("Párrafo", "PG SUPERSLIM URBAN — Enfocado para niveles bajos, mejorando consumo de gasolina y menos modificaciones en el proceso de blindaje.", "PG SUPERSLIM URBAN — Focused on lower levels, improving fuel consumption and fewer modifications in the armoring process.", "PG SUPERSLIM URBAN — Focado em níveis baixos, melhorando consumo de gasolina."),
    ("Párrafo", "PG SUPERSLIM SUPERIOR — En niveles superiores aumenta la capacidad de carga, equipos y tropa, disminuye gasto de combustible, crea acceso a nuevos proyectos.", "PG SUPERSLIM SUPERIOR — At higher levels increases load capacity, equipment and troop capacity, decreases fuel consumption.", "PG SUPERSLIM SUPERIOR — Em níveis superiores aumenta a capacidade de carga e tropa."),
    ("Párrafo", "Soluciones para: automotriz civil y militar, vehículos de carga, botes y fragatas, cristales para uso arquitectónico.", "Solutions for: civil and military automotive, cargo vehicles, boats and frigates, architectural glass.", "Soluções para: automotivo civil e militar, veículos de carga, barcos e fragatas."),
  ]},
  {"name": "Casos de Uso (3 cards)", "items": [
    ("Caso de uso", "Vehículos Deportivos", "Sports Vehicles", "Veículos Esportivos"),
    ("Caso de uso", "Aplicaciones Aeronáuticas", "Aeronautical Applications", "Aplicações Aeronáuticas"),
    ("Caso de uso", "Arquitectura Premium", "Premium Architecture", "Arquitetura Premium"),
  ]},
  {"name": "Descargas", "items": [
    ("Descarga", "Brochure de producto PG SuperSlim.pdf", "Product Brochure PG SuperSlim.pdf", "Brochure do produto PG SuperSlim.pdf"),
    ("Descarga", "Tabla balística para PG SuperSlim.pdf", "Ballistic chart for PG SuperSlim.pdf", "Tabela balística para PG SuperSlim.pdf"),
  ]},
]},

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "PG Ultra", "route": "/ultra", "category": "Producto",
"sections": [
  {"name": "Hero", "items": [
    ("Subtítulo", "Máxima protección balística con tecnología de vanguardia — Resistencia balística adicional a armas largas", "Maximum ballistic protection with cutting-edge technology — Additional resistance to long-range weapons", "Máxima proteção balística com tecnologia de ponta"),
    ("Título",    "PG Ultra", "PG Ultra", "PG Ultra"),
    ("Párrafo",   "PG ULTRA es un cristal blindado con todas las características de un nivel bajo, que suma una destacable resistencia balística a munición de nivel superior.",
                  "PG ULTRA is an armored glass with all the features of a low-level glass, adding outstanding ballistic resistance to higher-level ammunition.",
                  "PG ULTRA é um cristal blindado com todas as características de um nível baixo, somando resistência balística a munição de nível superior."),
  ]},
  {"name": "Key Benefits (5 beneficios)", "items": [
    ("Beneficio", "Máxima Resistencia: El nivel más alto de protección balística disponible en el mercado.", "Maximum Resistance: The highest level of ballistic protection available on the market.", "Máxima Resistência: O mais alto nível de proteção balística disponível no mercado."),
    ("Beneficio", "Protección Extrema: Combina resistencia a amenazas balísticas de bajo y alto calibre además de múltiples impactos.", "Extreme Protection: Combines resistance to low and high caliber ballistic threats plus multiple impacts.", "Proteção Extrema: Combina resistência a ameaças balísticas de baixo e alto calibre."),
    ("Beneficio", "Tecnología Avanzada: Incorpora los últimos avances en materiales de protección balística.", "Advanced Technology: Incorporates the latest advances in ballistic protection materials.", "Tecnologia Avançada: Incorpora os últimos avanços em materiais de proteção balística."),
    ("Beneficio", "Rendimiento Superior: Máxima durabilidad y resistencia en condiciones extremas.", "Superior Performance: Maximum durability and resistance in extreme conditions.", "Desempenho Superior: Máxima durabilidade e resistência em condições extremas."),
    ("Beneficio", "Producto Certificado: Cumple con los más estrictos estándares internacionales probado en los laboratorios más exigentes.", "Certified Product: Meets the strictest international standards tested in the most demanding laboratories.", "Produto Certificado: Cumpre com os mais rígidos padrões internacionais."),
  ]},
  {"name": "Tabs de contenido", "items": [
    ("Tab", "PG Ultra", "PG Ultra", "PG Ultra"),
    ("Tab", "Composición", "Composition", "Composição"),
    ("Tab", "Tecnología", "Technology", "Tecnologia"),
    ("Tab", "Especificaciones", "Specifications", "Especificações"),
    ("Párrafo", "Un cristal blindado que integra resistencia balística a armas cortas y en el mismo espesor resistencia para municiones de alto calibre.", "An armored glass integrating ballistic resistance to handguns and in the same thickness resistance to high-caliber ammunition.", "Um cristal blindado que integra resistência balística a armas curtas e munições de alto calibre."),
    ("Párrafo", "Vidrio blindado con resistencia balística según NIJ 0108.01 nivel NIJ III-A. Adicionalmente: 4 impactos 7,62×39mm FMJ a 30 cm + 1 impacto 5,56×45 M193 en el centro.", "Armored glass with ballistic resistance per NIJ 0108.01 level NIJ III-A. Additionally: 4 impacts 7.62×39mm FMJ at 30 cm + 1 impact 5.56×45 M193 at center.", "Vidro blindado com resistência balística conforme NIJ 0108.01 nível NIJ III-A."),
    ("Párrafo", "Certificados balísticos disponibles. Pruebas realizadas en laboratorios reconocidos internacionalmente.", "Ballistic certificates available. Tests performed in internationally recognized laboratories.", "Certificados balísticos disponíveis. Testes realizados em laboratórios reconhecidos internacionalmente."),
  ]},
  {"name": "Casos de Uso (3 cards)", "items": [
    ("Caso de uso", "Aplicaciones Militares Extremas", "Extreme Military Applications", "Aplicações Militares Extremas"),
    ("Caso de uso", "Vehículos Presidenciales", "Presidential Vehicles", "Veículos Presidenciais"),
    ("Caso de uso", "Instalaciones de Máxima Seguridad", "Maximum Security Facilities", "Instalações de Máxima Segurança"),
  ]},
  {"name": "Descargas", "items": [
    ("Descarga", "Brochure de producto PG Ultra.pdf", "Product Brochure PG Ultra.pdf", "Brochure do produto PG Ultra.pdf"),
    ("Descarga", "Tabla balística para PG Ultra.pdf", "Ballistic chart for PG Ultra.pdf", "Tabela balística para PG Ultra.pdf"),
  ]},
]},

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "Historia", "route": "/historia", "category": "Nosotros",
"sections": [
  {"name": "Descripción de empresa", "items": [
    ("Título",   "PG Products como compañía", "PG Products as a company", "PG Products como empresa"),
    ("Párrafo",  "Fundada en 1998 en São Paulo, PG Products® es uno de los líderes mundiales en la fabricación de cristales de protección balística. Ha creado la tecnología patentada SteelGlass®.", "Founded in 1998 in São Paulo, PG Products® is one of the world leaders in ballistic protection glass manufacturing. Created the patented SteelGlass® technology.", "Fundada em 1998 em São Paulo, PG Products® é um dos líderes mundiais na fabricação de cristais de proteção balística."),
    ("Párrafo",  "En 2007, la empresa pasó a formar parte del selecto grupo de cuatro proveedores globales de vidrios blindados para los principales fabricantes alemanes.", "In 2007, the company became one of four global suppliers of armored glass for major German manufacturers.", "Em 2007, a empresa tornou-se parte do seleto grupo de quatro fornecedores globais de vidros blindados para fabricantes alemães."),
    ("Párrafo",  "Actualmente cuenta con una completa cartera de soluciones en vidrios blindados y atiende los segmentos automovilístico, militar, aeronáutico, naval y arquitectónico.", "Currently has a complete portfolio of armored glass solutions serving automotive, military, aeronautical, naval and architectural segments.", "Atualmente conta com uma completa carteira de soluções em vidros blindados."),
    ("Párrafo",  "Planta en São Paulo (Cotia), 6.200 m², a 3 km de la Rodoanel. Planta en Toluca, México para demandas locales y de fabricantes europeos.", "Plant in São Paulo (Cotia), 6,200 m², 3 km from Rodoanel. Plant in Toluca, Mexico for local and European manufacturer demands.", "Planta em São Paulo (Cotia), 6.200 m², a 3 km da Rodoanel. Planta em Toluca, México."),
    ("Párrafo",  "La calidad se somete a rigurosas pruebas cumpliendo normas nacionales e internacionales. Todos los productos tienen un código de seguimiento único.", "Quality is subjected to rigorous testing meeting national and international standards. All products have a unique tracking code.", "A qualidade é submetida a rigorosos testes cumprindo normas nacionais e internacionais."),
  ]},
  {"name": "Nuestro Recorrido — Timeline", "items": [
    ("Título",    "Nuestro Recorrido", "Our Journey", "Nossa Trajetória"),
    ("Subtítulo", "Un viaje de dedicación, innovación continua y compromiso con la excelencia", "A journey of dedication, continuous innovation and commitment to excellence", "Uma jornada de dedicação, inovação contínua e compromisso com a excelência"),
    ("Nota",      "1998 — Se Funda PG Products Barueri (SP)", "1998 — PG Products Barueri (SP) Founded", "1998 — Fundação da PG Products Barueri (SP)"),
    ("Nota",      "2000 — Expansión Regional", "2000 — Regional Expansion", "2000 — Expansão Regional"),
    ("Nota",      "2004 — Miembro Fundador Brasil", "2004 — Founding Member Brazil", "2004 — Membro Fundador Brasil"),
    ("Nota",      "2006 — Certificación NATO STANAG I y II", "2006 — NATO STANAG I and II Certification", "2006 — Certificação NATO STANAG I e II"),
    ("Nota",      "2009 — Planta México en Toluca", "2009 — Mexico Plant in Toluca", "2009 — Planta México em Toluca"),
    ("Nota",      "2012 — Certificado BRG Brasil (ABNT NBR 15000)", "2012 — BRG Brazil Certificate (ABNT NBR 15000)", "2012 — Certificado BRG Brasil (ABNT NBR 15000)"),
    ("Nota",      "2015 — Exportación Internacional (Argentina, Francia, Israel)", "2015 — International Exports (Argentina, France, Israel)", "2015 — Exportação Internacional (Argentina, França, Israel)"),
    ("Nota",      "2019 — QMS ISO 9001:2015", "2019 — QMS ISO 9001:2015", "2019 — QMS ISO 9001:2015"),
  ]},
  {"name": "Plantas de Producción", "items": [
    ("Título",    "Nuestras Plantas de Producción", "Our Production Plants", "Nossas Plantas de Produção"),
    ("Subtítulo", "Innovación que une continentes, precisión que define nuestra excelencia.", "Innovation that unites continents, precision that defines our excellence.", "Inovação que une continentes, precisão que define nossa excelência."),
    ("Párrafo",   "En PG Products desarrollamos nuestras soluciones balísticas desde dos centros estratégicos de producción: México y Brasil. Ambas plantas integran laboratorios de I+D, líneas automatizadas de laminación y control de calidad bajo normas ISO 9001:2015 y NIJ.", "At PG Products we develop our ballistic solutions from two strategic production centers: Mexico and Brazil.", "Na PG Products desenvolvemos nossas soluções balísticas a partir de dois centros estratégicos de produção."),
    ("Nota",      "Brasil: Sede principal y laboratorio de innovación. Investigación, ingeniería multicapa y control de calidad de última generación.", "Brazil: Headquarters and innovation laboratory. Research, multilayer engineering and cutting-edge quality control.", "Brasil: Sede principal e laboratório de inovação."),
    ("Nota",      "México: Centro de producción y ensayos balísticos para el mercado norte y centroamericano.", "Mexico: Production and ballistic testing center for the North and Central American market.", "México: Centro de produção e ensaios balísticos para o mercado norte e centro-americano."),
  ]},
  {"name": "Nuestra Gente", "items": [
    ("Título",   "Nuestra gente", "Our people", "Nossa equipe"),
    ("Párrafo",  "En PG Products, creemos que la verdadera fortaleza de nuestra compañía no está solo en la tecnología, sino en las personas que la hacen posible.", "At PG Products, we believe the true strength of our company lies not only in technology, but in the people who make it possible.", "Na PG Products, acreditamos que a verdadeira força da nossa empresa não está apenas na tecnologia, mas nas pessoas que a tornam possível."),
    ("Párrafo",  "Desde ingenieros y técnicos especializados hasta diseñadores y personal operativo, todos compartimos un mismo propósito: proteger vidas a través de la excelencia.", "From engineers and specialized technicians to designers and operational staff, we all share one purpose: protecting lives through excellence.", "De engenheiros e técnicos especializados a designers e pessoal operacional, todos compartilhamos um propósito: proteger vidas através da excelência."),
  ]},
  {"name": "Descargas", "items": [
    ("Título",    "Archivos para descargar", "Files for download", "Arquivos para download"),
    ("Descarga",  "Brochure de productos PG Products", "PG Products brochure", "Brochure de produtos PG Products"),
    ("Descarga",  "Descargue nuestro último informe anual", "Download our latest annual report", "Baixe nosso último relatório anual"),
  ]},
]},

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "PG DNA", "route": "/pgdna", "category": "Nosotros",
"sections": [
  {"name": "Hero", "items": [
    ("Título",   "Conoce más de PG Products", "Learn more about PG Products", "Conheça mais sobre a PG Products"),
    ("Párrafo",  "Nuestros productos conservan una identidad que nos permite ofrecer además de seguridad, calidad total — poseemos un ADN propio PG que traslada características diferenciadas en cada aspecto.",
                 "Our products maintain an identity that allows us to offer, in addition to safety, total quality — we have our own PG DNA that transfers differentiated characteristics in every aspect.",
                 "Nossos produtos conservam uma identidade que nos permite oferecer, além de segurança, qualidade total."),
  ]},
  {"name": "Características del ADN PG (4 ítems)", "items": [
    ("Característica", "Ingeniería Balística Innovadora — Creamos fórmulas de cristal blindado de avanzada.", "Innovative Ballistic Engineering — We create advanced armored glass formulas.", "Engenharia Balística Inovadora — Criamos fórmulas de cristal blindado avançadas."),
    ("Característica", "Geometría Estable — Producción bajo procesos de ingeniería 3D y CAD CAM de última generación.", "Stable Geometry — Production under 3D engineering and latest-generation CAD CAM processes.", "Geometria Estável — Produção sob processos de engenharia 3D e CAD CAM de última geração."),
    ("Característica", "Estética Única — Acabados de alta calidad acordes a las exigencias y evolución de los mercados.", "Unique Aesthetics — High-quality finishes in line with market demands and evolution.", "Estética Única — Acabamentos de alta qualidade acordes com as exigências e evolução dos mercados."),
    ("Característica", "Óptica Destacable — Consistente a las reglas internacionales.", "Outstanding Optics — Consistent with international rules.", "Óptica Destacável — Consistente com as regras internacionais."),
  ]},
  {"name": "Sección Formulación PG", "items": [
    ("Título",   "Formulación PG", "PG Formulation", "Formulação PG"),
    ("Párrafo",  "La composición del vidrio permite que el proyectil al impacto disminuya su fuerza y el policarbonato absorba su energía cinética y se detenga, quedando encapsulado y evitando esquirlas al interior del vehículo.",
                 "The glass composition allows the projectile on impact to reduce its force and the polycarbonate to absorb its kinetic energy and stop, remaining encapsulated and preventing splinters inside the vehicle.",
                 "A composição do vidro permite que o projétil ao impacto diminua sua força e o policarbonato absorva sua energia cinética."),
  ]},
  {"name": "I+D", "items": [
    ("Título",   "Producto, Ingeniería & Desarrollo", "Product, Engineering & Development", "Produto, Engenharia & Desenvolvimento"),
    ("Párrafo",  "En PG Products contamos con un equipo humano capacitado y experimentado en investigación y desarrollo de producto, adelantando diseño continuo de soluciones a nivel de formulación balística, nuevos materiales, mejora de procesos y composiciones para aplicaciones especiales, además de proyectos en conjunto con reconocidos institutos y universidades.",
                 "At PG Products we have a trained and experienced team in product research and development, continuously advancing solutions in ballistic formulation, new materials, process improvement and compositions for special applications.",
                 "Na PG Products contamos com equipe capacitada e experiente em pesquisa e desenvolvimento de produto."),
  ]},
  {"name": "Portafolio de Productos", "items": [
    ("Título",   "Portafolio de Productos", "Product Portfolio", "Portfólio de Produtos"),
    ("Párrafo",  "Hemos desarrollado BRG para más de 300 modelos vigentes de vehículos en todos los niveles de acuerdo a normas locales e internacionales. Además del portafolio, proveemos soluciones particulares a los mercados con nuestros productos de línea.",
                 "We have developed BRGs for more than 300 current vehicle models at all levels according to local and international standards. Beyond the portfolio, we provide particular solutions to markets with our line products.",
                 "Desenvolvemos BRG para mais de 300 modelos de veículos vigentes em todos os níveis conforme normas locais e internacionais."),
    ("Botón",    "Conocer más", "Learn more", "Saiba mais"),
  ]},
]},

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "PG Military", "route": "/pgmilitary", "category": "Aplicación",
"sections": [
  {"name": "Hero", "items": [
    ("Título", "PG Military Applications", "PG Military Applications", "PG Military Applications"),
  ]},
  {"name": "Soluciones de Protección Militar", "items": [
    ("Título",   "Soluciones de Protección Militar", "Military Protection Solutions", "Soluções de Proteção Militar"),
    ("Párrafo",  "Nuestras aplicaciones militares ofrecen los más altos niveles de protección balística para el personal y equipos de defensa. Diseñadas para resistir condiciones extremas de combate.",
                 "Our military applications offer the highest levels of ballistic protection for defense personnel and equipment. Designed to withstand extreme combat conditions.",
                 "Nossas aplicações militares oferecem os mais altos níveis de proteção balística para pessoal e equipamentos de defesa."),
    ("Párrafo",  "De vehículos blindados a instalaciones militares, nuestros productos cumplen rigurosos estándares y especificaciones militares. Cada solución se diseña a medida para abordar niveles de amenaza específicos.",
                 "From armored vehicles to military facilities, our products meet rigorous military standards and specifications. Each solution is custom-designed for specific threat levels.",
                 "De veículos blindados a instalações militares, nossos produtos atendem a rigorosos padrões militares."),
    ("Característica", "Protección Certificada NIJ", "NIJ Certified Protection", "Proteção Certificada NIJ"),
    ("Característica", "Resistencia Multi-Impacto",  "Multi-Impact Resistance",    "Resistência Multi-Impacto"),
    ("Característica", "Durabilidad en Ambiente Extremo", "Durability in Extreme Environments", "Durabilidade em Ambiente Extremo"),
  ]},
  {"name": "Tabla de Soluciones Militares", "items": [
    ("Título",  "MILITARY SOLUTIONS BALLISTIC CHART", "MILITARY SOLUTIONS BALLISTIC CHART", "MILITARY SOLUTIONS BALLISTIC CHART"),
    ("Label",   "Espesor (mm)", "Thickness (mm)", "Espessura (mm)"),
    ("Label",   "Peso (Kg/m²)", "Weight (Kg/m²)", "Peso (Kg/m²)"),
    ("Label",   "Standard Balístico", "Ballistic Standard", "Padrão Balístico"),
    ("Label",   "ARMA", "WEAPON", "ARMA"),
    ("Label",   "CALIBRE", "CALIBER", "CALIBRE"),
  ]},
  {"name": "Descargas", "items": [
    ("Título",   "Archivos para descargar", "Files for download", "Arquivos para download"),
    ("Descarga", "Descargue nuestros Casos de éxito Military grade", "Download our Military grade success cases", "Baixe nossos casos de sucesso Military grade"),
  ]},
]},

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "PG Ballistics", "route": "/pgballistics", "category": "Aplicación",
"sections": [
  {"name": "Soluciones Balísticas", "items": [
    ("Título",   "Soluciones Balísticas Avanzadas", "Advanced Ballistic Solutions", "Soluções Balísticas Avançadas"),
    ("Párrafo",  "Nuestros productos de vidrio balístico están diseñados y fabricados bajo los más rigurosos estándares internacionales, ofreciendo protección excepcional contra diversas amenazas.",
                 "Our ballistic glass products are designed and manufactured under the most rigorous international standards, offering exceptional protection against various threats.",
                 "Nossos produtos de vidro balístico são projetados e fabricados sob os mais rigorosos padrões internacionais."),
    ("Característica", "Certificación NIJ — Certificación bajo los estándares más exigentes del National Institute of Justice.", "NIJ Certification — Certification under the most demanding National Institute of Justice standards.", "Certificação NIJ — Certificação sob os padrões mais exigentes do National Institute of Justice."),
    ("Característica", "Protección Multi-Amenaza — Resistencia comprobada contra múltiples calibres y tipos de proyectiles.", "Multi-Threat Protection — Proven resistance against multiple calibers and projectile types.", "Proteção Multi-Ameaça — Resistência comprovada contra múltiplos calibres e tipos de projéteis."),
    ("Característica", "Tecnología Avanzada — Tecnología multi-capa de vanguardia para máximo rendimiento balístico.", "Advanced Technology — Cutting-edge multi-layer technology for maximum ballistic performance.", "Tecnologia Avançada — Tecnologia multicamada de ponta para máximo desempenho balístico."),
    ("Característica", "Control de Calidad — Rigurosos controles de calidad y pruebas exhaustivas en cada producto.", "Quality Control — Rigorous quality controls and exhaustive testing on each product.", "Controle de Qualidade — Rigorosos controles de qualidade e testes exaustivos em cada produto."),
  ]},
  {"name": "Galería de Pruebas y Certificaciones", "items": [
    ("Título",    "Galería de Pruebas y Certificaciones", "Testing and Certifications Gallery", "Galeria de Testes e Certificações"),
    ("Subtítulo", "Atestigüe los rigurosos procesos de prueba y los estándares de certificación que validan nuestras soluciones.", "Witness the rigorous testing processes and certification standards that validate our solutions.", "Testemunhe os rigorosos processos de teste e padrões de certificação que validam nossas soluções."),
    ("Subtítulo", "Estándares de Prueba Rigurosos", "Rigorous Testing Standards", "Padrões de Teste Rigorosos"),
    ("Párrafo",   "Cada panel de vidrio balístico es sometido a protocolos de prueba exhaustivos para garantizar la máxima protección y confiabilidad en situaciones críticas.", "Each ballistic glass panel is subjected to exhaustive testing protocols to ensure maximum protection and reliability in critical situations.", "Cada painel de vidro balístico é submetido a protocolos de teste exaustivos."),
  ]},
  {"name": "Tabs de pruebas", "items": [
    ("Tab",   "Estándares", "Standards", "Padrões"),
    ("Tab",   "Pruebas",    "Tests",     "Testes"),
    ("Tab",   "Certificaciones", "Certifications", "Certificações"),
    ("Tab",   "Aplicaciones",    "Applications",   "Aplicações"),
    ("Nota",  "Prueba de Impacto Balístico", "Ballistic Impact Test", "Teste de Impacto Balístico"),
    ("Nota",  "Prueba Ambiental", "Environmental Test", "Teste Ambiental"),
    ("Nota",  "Evaluación de Durabilidad", "Durability Assessment", "Avaliação de Durabilidade"),
    ("Nota",  "Cumplimiento de Estándares Internacionales", "International Standards Compliance", "Conformidade com Padrões Internacionais"),
    ("Nota",  "Procedimientos de Prueba Avanzados", "Advanced Testing Procedures", "Procedimentos de Teste Avançados"),
    ("Nota",  "Certificaciones Gubernamentales / Certificaciones de Calidad", "Government Certifications / Quality Certifications", "Certificações Governamentais / Certificações de Qualidade"),
    ("Nota",  "Automotriz — Vehículos blindados, transporte VIP", "Automotive — Armored vehicles, VIP transport", "Automotivo — Veículos blindados, transporte VIP"),
    ("Nota",  "Militar — Vehículos tácticos, centros de mando", "Military — Tactical vehicles, command centers", "Militar — Veículos táticos, centros de comando"),
    ("Nota",  "Arquitectónico — Edificios gubernamentales, embajadas", "Architectural — Government buildings, embassies", "Arquitetônico — Edifícios governamentais, embaixadas"),
  ]},
  {"name": "Sección Video I+D", "items": [
    ("Título",    "Investigación & Desarrollo", "Research & Development", "Pesquisa & Desenvolvimento"),
    ("Subtítulo", "PG Products, la nueva generación en protección", "PG Products, the new generation in protection", "PG Products, a nova geração em proteção"),
  ]},
  {"name": "Descargas", "items": [
    ("Título",   "Archivos para descargar", "Files for download", "Arquivos para download"),
    ("Descarga", "Brochure de productos PG Products", "PG Products brochure", "Brochure de produtos PG Products"),
    ("Descarga", "Descargue nuestro último informe anual", "Download our latest annual report", "Baixe nosso último relatório anual"),
  ]},
]},

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "PG Automotive", "route": "/pgautomotive", "category": "Aplicación",
"sections": [
  {"name": "Hero", "items": [
    ("Título", "PG Automotive BRG", "PG Automotive BRG", "PG Automotive BRG"),
  ]},
  {"name": "Soluciones (2 cards)", "items": [
    ("Título",   "Retrofit Solutions", "Retrofit Solutions", "Retrofit Solutions"),
    ("Título",   "OEM Solutions",      "OEM Solutions",      "OEM Solutions"),
  ]},
  {"name": "Descargas", "items": [
    ("Título",   "Archivos para descargar", "Files for download", "Arquivos para download"),
    ("Descarga", "Descargue nuestros Casos de éxito OEM",     "Download our OEM success cases",     "Baixe nossos casos de sucesso OEM"),
    ("Descarga", "Descargue nuestros Casos de éxito Retrofit","Download our Retrofit success cases","Baixe nossos casos de sucesso Retrofit"),
  ]},
]},

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "PG Architectural", "route": "/pgarchitectural", "category": "Aplicación",
"sections": [
  {"name": "Hero", "items": [
    ("Título", "PG Architectural Applications", "PG Architectural Applications", "PG Architectural Applications"),
  ]},
  {"name": "Tabla Balística Arquitectural", "items": [
    ("Label", "Espesor (mm)",        "Thickness (mm)",  "Espessura (mm)"),
    ("Label", "Peso (Kg/m²)",        "Weight (Kg/m²)",  "Peso (Kg/m²)"),
    ("Label", "Standard Balístico",  "Ballistic Standard","Padrão Balístico"),
    ("Label", "ARMA",                "WEAPON",           "ARMA"),
    ("Label", "CALIBRE",             "CALIBER",          "CALIBRE"),
  ]},
  {"name": "Descargas", "items": [
    ("Título",   "Archivos para descargar",                    "Files for download",           "Arquivos para download"),
    ("Descarga", "Descargue nuestros Casos de éxito OEM",     "Download our OEM success cases","Baixe nossos casos de sucesso OEM"),
    ("Descarga", "Descargue nuestros Casos de éxito Retrofit","Download our Retrofit success cases","Baixe nossos casos de sucesso Retrofit"),
  ]},
]},

# ─────────────────────────────────────────────────────────────────────────────
{
"title": "Contacto", "route": "/contact", "category": "General",
"sections": [
  {"name": "Hero", "items": [
    ("Título",   "Contáctenos", "Contact Us", "Contate-nos"),
    ("Párrafo",  "Estamos aquí para responder a sus preguntas y proporcionarle soluciones de protección balística premium a medida.",
                 "We are here to answer your questions and provide you with tailored premium ballistic protection solutions.",
                 "Estamos aqui para responder às suas perguntas e fornecer soluções de proteção balística premium sob medida."),
  ]},
  {"name": "Formulario de contacto", "items": [
    ("Label",       "Nombre",    "Name",    "Nome"),
    ("Label",       "Email",     "Email",   "Email"),
    ("Label",       "Teléfono",  "Phone",   "Telefone"),
    ("Label",       "Empresa",   "Company", "Empresa"),
    ("Label",       "Mensaje",   "Message", "Mensagem"),
    ("Label",       "Producto",  "Product", "Produto"),
    ("Botón",       "Cancelar",  "Cancel",  "Cancelar"),
    ("Botón",       "Enviar",    "Send",    "Enviar"),
  ]},
]},

]  # end PAGES

# ─────────────────────────────────────────────────────────────────────────────
# COMMON ELEMENTS (shared across all / most product pages)
# ─────────────────────────────────────────────────────────────────────────────
COMMON = {
"title": "Elementos comunes — todas las páginas de producto",
"sections": [
  {"name": "Formulario de contacto (en todas las páginas de producto)", "items": [
    ("Título",      "Protegemos tu seguridad",                         "We protect your safety",                              "Protegemos sua segurança"),
    ("Subtítulo",   "Confía en la experiencia y calidad de un líder en seguridad automotriz.", "Trust the experience and quality of a leader in automotive safety.", "Confie na experiência e qualidade de um líder em segurança automotiva."),
    ("Label",       "Nombre completo",  "Full name",  "Nome completo"),
    ("Label",       "Email",            "Email",      "Email"),
    ("Label",       "Mensaje",          "Message",    "Mensagem"),
    ("Placeholder", "Introduzca su nombre",                          "Enter your name",                          "Insira seu nome"),
    ("Placeholder", "Introduzca su dirección de correo electrónico", "Enter your email address",                 "Insira seu endereço de e-mail"),
    ("Placeholder", "Escriba aquí su mensaje",                       "Write your message here",                  "Escreva sua mensagem aqui"),
    ("Botón",       "Cancelar",         "Cancel",     "Cancelar"),
    ("Botón",       "Enviar",           "Send",       "Enviar"),
    ("Toast",       "Mensaje enviado correctamente. Nos pondremos en contacto pronto.", "Message sent successfully. We will get in touch soon.", "Mensagem enviada com sucesso. Entraremos em contato em breve."),
    ("Toast",       "Por favor complete todos los campos requeridos.", "Please complete all required fields.", "Por favor, preencha todos os campos obrigatórios."),
    ("Toast",       "Formulario cancelado.",  "Form cancelled.",  "Formulário cancelado."),
  ]},
  {"name": "Navegación de Tabs (páginas de producto)", "items": [
    ("Tab", "[Nombre del producto]", "[Product name]", "[Nome do produto]"),
    ("Tab", "Composición",          "Composition",     "Composição"),
    ("Tab", "Tecnología",           "Technology",      "Tecnologia"),
    ("Tab", "Especificaciones",     "Specifications",  "Especificações"),
  ]},
  {"name": "Secciones comunes (títulos de sección)", "items": [
    ("Título",   "Key Benefits",                    "Key Benefits",                    "Key Benefits"),
    ("Título",   "Casos de uso y Aplicaciones",     "Use Cases and Applications",      "Casos de uso e Aplicações"),
    ("Título",   "Brochures y Descargas",           "Brochures and Downloads",         "Brochures e Downloads"),
    ("Título",   "Archivos para descargar",         "Files for download",              "Arquivos para download"),
    ("Título",   "Protegemos tu seguridad",         "We protect your safety",          "Protegemos sua segurança"),
  ]},
  {"name": "Encabezados de tabla balística", "items": [
    ("Label", "Espesor (mm)",       "Thickness (mm)",    "Espessura (mm)"),
    ("Label", "Peso (Kg/m²)",       "Weight (Kg/m²)",    "Peso (Kg/m²)"),
    ("Label", "Standard Balístico", "Ballistic Standard","Padrão Balístico"),
    ("Label", "ARMA",               "WEAPON",            "ARMA"),
    ("Label", "CALIBRE",            "CALIBER",           "CALIBRE"),
  ]},
]
}

# ══════════════════════════════════════════════════════════════════════════════
# BUILD DOCUMENT
# ══════════════════════════════════════════════════════════════════════════════

# ── Cover ─────────────────────────────────────────────────────────────────────
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = p.add_run("PG PRODUCTS")
r.bold = True; r.font.size = Pt(28); r.font.color.rgb = NAVY

p2 = doc.add_paragraph()
p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
r2 = p2.add_run("Mapa de Textos del Sitio Web")
r2.bold = True; r2.font.size = Pt(18); r2.font.color.rgb = BLUE

p3 = doc.add_paragraph()
p3.alignment = WD_ALIGN_PARAGRAPH.CENTER
r3 = p3.add_run("Guía de referencia multiidioma para el equipo de contenido — Marzo 2026")
r3.font.size = Pt(10); r3.font.color.rgb = DGRAY; r3.italic = True

doc.add_paragraph()

# ── Stats ─────────────────────────────────────────────────────────────────────
total_items = sum(len(s["items"]) for pg in PAGES for s in pg["sections"])
total_sections = sum(len(pg["sections"]) for pg in PAGES)

stats_tbl = doc.add_table(rows=1, cols=3)
stats_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
stats_tbl.style = "Table Grid"
for i, (val, label) in enumerate([
    (str(len(PAGES)), "Páginas documentadas"),
    (str(total_sections), "Secciones"),
    (str(total_items), "Textos catalogados"),
]):
    c = stats_tbl.cell(0, i)
    set_cell_bg(c, NAVY)
    p_ = c.paragraphs[0]
    p_.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = p_.add_run(f"{val}\n"); r1.bold = True; r1.font.size = Pt(22); r1.font.color.rgb = WHITE
    r2 = p_.add_run(label);      r2.font.size = Pt(9);  r2.font.color.rgb = RGBColor(0xA0,0xB4,0xD0)
    p_.paragraph_format.space_before = Pt(6)
    p_.paragraph_format.space_after  = Pt(6)

doc.add_paragraph()

# ── Notes box ────────────────────────────────────────────────────────────────
nb = doc.add_table(rows=1, cols=1)
nb.style = "Table Grid"
nc = nb.cell(0, 0)
set_cell_bg(nc, RGBColor(0xE8,0xF0,0xFF))
np_ = nc.paragraphs[0]
np_.alignment = WD_ALIGN_PARAGRAPH.LEFT
rh = np_.add_run("Notas importantes\n"); rh.bold = True; rh.font.size = Pt(10); rh.font.color.rgb = NAVY
for n in [
    "Las columnas ES / EN / PT muestran el texto en los tres idiomas del sitio.",
    "Tipo de elemento indica su función en la página (Título, Párrafo, Botón, Tab, etc.).",
    "Los textos marcados como 'Común' aparecen en múltiples páginas — cambiar uno implica cambiar todos.",
    "Respetar exactamente los saltos de línea y la puntuación al subir nuevos textos al CMS.",
]:
    r_ = np_.add_run(f"• {n}\n"); r_.font.size = Pt(9); r_.font.color.rgb = BLACK
np_.paragraph_format.space_before = Pt(4); np_.paragraph_format.space_after = Pt(4)

doc.add_paragraph()

# ── Legend ────────────────────────────────────────────────────────────────────
lp_ = doc.add_paragraph()
lr  = lp_.add_run("Leyenda de tipos de elemento")
lr.bold = True; lr.font.size = Pt(11); lr.font.color.rgb = BLUE

legend_items = list(ELEM_COLOR.items())
cols = 5
rows_n = (len(legend_items) + cols - 1) // cols
leg_tbl = doc.add_table(rows=rows_n, cols=cols)
leg_tbl.style = "Table Grid"
for idx, (label, color) in enumerate(legend_items):
    r_, c_ = idx // cols, idx % cols
    cell = leg_tbl.cell(r_, c_)
    set_cell_bg(cell, color)
    cell_para(cell, label, bold=True, size=8, color=WHITE, align=WD_ALIGN_PARAGRAPH.CENTER)
total_leg = rows_n * cols
for idx in range(len(legend_items), total_leg):
    cell = leg_tbl.cell(idx // cols, idx % cols)
    set_cell_bg(cell, RGBColor(0xF0,0xF0,0xF0))
    cell_para(cell, "", size=8, color=DGRAY)

doc.add_paragraph()
doc.add_page_break()

# ── Helper: build image table ─────────────────────────────────────────────────
def build_text_table(doc, items):
    tbl = doc.add_table(rows=1, cols=4)
    tbl.style = "Table Grid"
    tbl.alignment = WD_TABLE_ALIGNMENT.LEFT

    # Header
    hrow = tbl.rows[0]
    for i, h in enumerate(["Tipo", "ES — Español", "EN — English", "PT — Português"]):
        c = hrow.cells[i]
        set_cell_bg(c, NAVY)
        cell_para(c, h, bold=True, size=9, color=WHITE, align=WD_ALIGN_PARAGRAPH.CENTER)

    for idx, (elem_type, es, en, pt) in enumerate(items):
        row = tbl.add_row()
        bg  = LGRAY if idx % 2 == 0 else WHITE
        badge_color = ELEM_COLOR.get(elem_type, DGRAY)

        # Type badge
        set_cell_bg(row.cells[0], badge_color)
        cell_para(row.cells[0], elem_type, bold=True, size=8, color=WHITE, align=WD_ALIGN_PARAGRAPH.CENTER)

        # Texts
        for col_i, text in enumerate([es, en, pt], start=1):
            c = row.cells[col_i]
            set_cell_bg(c, bg)
            p_ = c.paragraphs[0]
            r_ = p_.add_run(text)
            r_.font.size = Pt(8.5)
            r_.font.color.rgb = BLACK
            p_.paragraph_format.space_before = Pt(2)
            p_.paragraph_format.space_after  = Pt(2)

    # Column widths
    for row in tbl.rows:
        row.cells[0].width = Inches(1.0)
        row.cells[1].width = Inches(2.2)
        row.cells[2].width = Inches(2.2)
        row.cells[3].width = Inches(2.2)

    doc.add_paragraph()

# ══════════════════════════════════════════════════════════════════════════════
# RENDER PAGES
# ══════════════════════════════════════════════════════════════════════════════

for pg_idx, page in enumerate(PAGES):
    # Page header
    h_tbl = doc.add_table(rows=1, cols=2)
    h_tbl.style = "Table Grid"
    cat_color = CAT_COLOR.get(page["category"], NAVY)

    left = h_tbl.cell(0, 0)
    set_cell_bg(left, NAVY)
    lp_ = left.paragraphs[0]
    lp_.alignment = WD_ALIGN_PARAGRAPH.LEFT
    r1 = lp_.add_run(page["title"]); r1.bold = True; r1.font.size = Pt(15); r1.font.color.rgb = WHITE
    r2 = lp_.add_run(f"  {page['route']}"); r2.font.size = Pt(10); r2.font.color.rgb = RGBColor(0x80,0xA0,0xD0)
    lp_.paragraph_format.space_before = Pt(5); lp_.paragraph_format.space_after = Pt(5)

    right = h_tbl.cell(0, 1)
    set_cell_bg(right, cat_color)
    cell_para(right, page["category"], bold=True, size=10, color=WHITE, align=WD_ALIGN_PARAGRAPH.CENTER)

    doc.add_paragraph()

    for section in page["sections"]:
        add_section_heading(doc, section["name"])
        build_text_table(doc, section["items"])

    if pg_idx < len(PAGES) - 1:
        doc.add_page_break()

# ── Common elements page ──────────────────────────────────────────────────────
doc.add_page_break()

h_tbl2 = doc.add_table(rows=1, cols=2)
h_tbl2.style = "Table Grid"
lc = h_tbl2.cell(0, 0)
set_cell_bg(lc, PURP)
lcp = lc.paragraphs[0]
lcp.alignment = WD_ALIGN_PARAGRAPH.LEFT
rc1 = lcp.add_run(COMMON["title"]); rc1.bold = True; rc1.font.size = Pt(13); rc1.font.color.rgb = WHITE
lcp.paragraph_format.space_before = Pt(5); lcp.paragraph_format.space_after = Pt(5)
rc = h_tbl2.cell(0, 1)
set_cell_bg(rc, PURP)
cell_para(rc, "Compartido", bold=True, size=10, color=WHITE, align=WD_ALIGN_PARAGRAPH.CENTER)

doc.add_paragraph()

for section in COMMON["sections"]:
    add_section_heading(doc, section["name"])
    build_text_table(doc, section["items"])

# ── Save ──────────────────────────────────────────────────────────────────────
out = "/Users/fernandogarciamontes/Desktop/premium-armor-glass/PG_Products_TextMap.docx"
doc.save(out)
print(f"Saved → {out}")
print(f"Pages: {len(PAGES)} | Sections: {total_sections} | Text items: {total_items}")
