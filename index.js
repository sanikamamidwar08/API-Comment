

function fetchAllPosts() {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => {
        var htmlString = `
        <tr>
        <th> id </th>
         <th> postId </th>
         <th>name</th>
          <th> email </th>
           <th> body </th>
        </tr>
        `
        data.forEach(element => {
            htmlString += `
            <tr>
            <td> ${element.id} </td>
             <td> ${element.postId} </td>
            <td> ${element.name} </td>
              <td> ${element.email} </td>
               <td> ${element.body} </td>
            </tr>`
        });
        document.getElementById("post-table").innerHTML = htmlString;
    })
}
