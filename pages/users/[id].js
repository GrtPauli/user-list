export const getStaticPaths = async () =>
{
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await result.json()

    const paths = data.map(user => 
    {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>
{
    const id = context.params.id
    const result = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await result.json()

    return{
        props: { user: data }
    }
}

const Details = ({ user }) => {
    return (
        <div>
            <h1>
                { user.name }
            </h1>
            <p>{ user.email }</p>
            <p>{ user.website }</p>
            <p>{ user.address.city }</p>
        </div>
      );
}
 
export default Details;