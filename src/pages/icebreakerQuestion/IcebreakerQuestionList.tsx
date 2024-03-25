import { useEffect, useState } from "react";
import { IcebreakerQuestionService } from "../../api/IcebreakerQuestionService";

const IcebreakerQuestionList = () => {
  const [names, setNames] = useState<String[]>([]);
  const [question, setQuestion] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await IcebreakerQuestionService.getList();
      if (result instanceof Error) {
        console.error('Error fetching data:', result);
        return [];
      }
      setNames(result.map(x => x.question));
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  async function onQuestionSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!question) { console.log('Invalid question'); }
    const result = await IcebreakerQuestionService.edit(null, question);
    if (result instanceof Error) {
      console.error('Error fetching data:', result);
      return;
    }
    console.log('newId:', result.id);
    window.location.reload();
  }

  return (<>
  <div className="card">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Question</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
      {names.map((name, i) => <tr key={i}>
          <td>{name}</td>
          <td></td>
        </tr>)}
      </tbody>
    </table>
  </div>
    
    <form onSubmit={onQuestionSubmit}>
      <input className="form-control" name='question' onChange={e => setQuestion(e.target.value)} />
      <button type='submit'>Save</button>
    </form>
  </>);
}

export default IcebreakerQuestionList;