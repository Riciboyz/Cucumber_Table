import './stylesheet.css'

const tableData = [
  { keyword: 'Feature', equivalent: 'FunkcionalitāteFīča' },
  { keyword: 'Background', equivalent: 'KontekstsSituācija' },
  { keyword: 'Rule', equivalent: 'Rule' },
  { keyword: 'Scenario', equivalent: 'PiemērsScenārijs' },
  { keyword: 'Scenario Outline', equivalent: 'Scenārijs pēc parauga' },
  { keyword: 'Examples', equivalent: 'PiemēriParaugs' },
  { keyword: 'Given', equivalent: '*Kad' },
  { keyword: 'When', equivalent: '*Ja' },
  { keyword: 'Then', equivalent: '*Tad' },
  { keyword: 'And', equivalent: '*Un' },
  { keyword: 'But', equivalent: '*Bet' },
];

export default function App() {
  return (
    <div className="container">
      <table className="shine-table">
        <thead>
          
          <tr>
            <th>Keyword</th>
            <th>Equivalent(s)</th>
          </tr>   

        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="fade-in-row"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <td>{row.keyword}</td>
              <td>{row.equivalent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
