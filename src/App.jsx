import './stylesheet.css';

const tableData = [
  { keyword: 'Feature', equivalent: 'Funkcionālā iezīme' },
  { keyword: 'Background', equivalent: 'Konteksts' },
  { keyword: 'Rule', equivalent: 'Noteikums' },
  { keyword: 'Scenario', equivalent: 'Scenārijs' },
  { keyword: 'Scenario Outline', equivalent: 'Scenārijs pēc parauga' },
  { keyword: 'Examples', equivalent: 'Piemēri' },
  { keyword: 'Given', equivalent: 'Kad' },
  { keyword: 'When', equivalent: 'Ja' },
  { keyword: 'Then', equivalent: 'Tad' },
  { keyword: 'And', equivalent: 'Un' },
  { keyword: 'But', equivalent: 'Bet' },
  { keyword: 'Or', equivalent: 'Vai' },
];

const answersData = [
  { question: 'Kas un kāpēc ir funkcionālā iezīme?', answer: 'Sistēmas funkcionalitāte, kas atbalsta spēju (Capability) un specifikē uzvedību.' },
  { question: 'Kādā formātā veidot lietotājstāstus?', answer: 'As a [lietotāja loma], I want [sistēmas darbība], So that [mērķis].' },
  { question: 'Kā veidot scenārijus?', answer: 'Given [nosacījums], When [darbība], Then [rezultāts].' },
  { question: 'Kā Rubika kubs ļauj skatīties uz funkcionālajām iezīmēm?', answer: 'Metafora palīdz aplūkot funkcionalitāti no dažādiem leņķiem un identificēt dažādus scenārijus.' },
  { question: 'Kas ir veiksmīgā iznākuma scenārijs?', answer: 'Scenārijs, kurā lietotājs sasniedz mērķi bez šķēršķiem.' },
];

export default function App() {
  return (
    <div className="container">
      <h2>Gherkin Keywords</h2>
      <table className="shine-table">
        <thead>
          <tr>
            <th>Keyword</th>
            <th>Equivalent(s)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="fade-in-row" style={{ animationDelay: `${index * 0.1}s` }}>
              <td>{row.keyword}</td>
              <td>{row.equivalent}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Jautājumi & atbildes</h2>
      <table className="shine-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {answersData.map((row, index) => (
            <tr key={index} className="fade-in-row" style={{ animationDelay: `${index * 0.1}s` }}>
              <td>{row.question}</td>
              <td>{row.answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
