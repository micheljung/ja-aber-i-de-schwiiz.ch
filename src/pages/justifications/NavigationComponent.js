export default function NavigationComponent(props) {
  let nr = 1;
  return (
    <div className="p-4 m-4 dark:bg-gray-900">
      {props.data.map(category => {
        return (
          <>
            <h1 id={"cat-" + category.id} className="text-lg font-bold text-gray-300">{category.title}</h1>
            <ol start={nr} className="list-decimal list-inside grid gap-2 my-4">
              {category.justifications.map(justification => {
                nr++
                return <li><a href={"#" + justification.id}>{justification.claim.capitalize()}</a></li>
              })}
            </ol>
          </>
        )
      })}
    </div>
  )
}