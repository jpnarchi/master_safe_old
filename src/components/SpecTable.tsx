
import { useRef, useEffect } from 'react';

interface SpecProps {
  id: string;
  title: string;
  description: string;
}

const SpecTable = ({ id, title, description }: SpecProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.scale-in');
            animatedElements.forEach((el) => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tableData = [
    {
      type: "Standard",
      thickness: "21 mm",
      weight: "45 kg/m²",
      ballistic: "NIJ III-A"
    },
    {
      type: "SuperSlim",
      thickness: "18 mm",
      weight: "38 kg/m²",
      ballistic: "NIJ III-A"
    },
    {
      type: "Standard+",
      thickness: "42 mm",
      weight: "95 kg/m²",
      ballistic: "NIJ III"
    },
    {
      type: "Super+",
      thickness: "38 mm",
      weight: "87 kg/m²",
      ballistic: "NIJ III"
    }
  ];

  return (
    <section id={id} ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-pgnavy mb-4">{title}</h2>
          <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="scale-in">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-pgnavy">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                    Tipo
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Espesor
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Peso
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Nivel Balístico
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {tableData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-pgnavy sm:pl-6">
                      {item.type}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                      {item.thickness}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                      {item.weight}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                      {item.ballistic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6 text-sm text-gray-500">
            *Consulte disponibilidad de producto en su región.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecTable;
