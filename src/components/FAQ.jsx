export default function FAQ() {
  const qas = [
    ['Can I use my existing phone number?', 'Yes, simply forward or port your number.'],
    ['Is data secure?', 'All data is encrypted at rest and in transit.'],
    ['What languages are supported?', 'English today; more languages rolling out soon.'],
    ['Do you integrate with CRMs?', 'Yes—native integrations & webhooks.'],
    ['Is there a free trial?', 'Early access includes 14-day free usage.'],
  ];
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {qas.map(([q, a]) => (
            <details key={q} className="bg-white rounded-xl shadow-sm p-4 open:ring-2">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-sm text-gray-700">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
