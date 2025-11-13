import SingleQuestion from './SingleQuestion';

const Questions = ({ questions, activeId, toggleQuestion }) => {
    return (
        <section className='container'>
            <h1>Questions</h1>
            {questions.map((question) => {
                // const { id, title, info } = question;
                return (
                    <SingleQuestion
                        key={question.id}
                        activeId={activeId}
                        toggleQuestion={toggleQuestion}
                        {...question}
                    />
                );
            })}
        </section>
    );
};

export default Questions;

{
    /*
    <section className='container'>
            <h1>Questions</h1>
            {questions.map((question) => {
                const { id, title, info } = question;
                return <SingleQuestion key={id} question={question} />;
            })}
        </section>
    */
}
