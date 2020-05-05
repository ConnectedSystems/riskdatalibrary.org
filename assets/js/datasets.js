$(document).ready(function () {
  $.get("https://d3utuyt0gg.execute-api.ap-southeast-2.amazonaws.com/dev/api/samples", function (data) {

    for (let index = 0; index < data.data.length; index++) {
      const element = data.data[index];
      $("#datasets").append(`
        <li>
          <h4>${element.title}</h4>
          <p>${element.description}</p>
          <a href="${element.download_link}" download>
            Download ${element.schema} dataset
            ${element.file_size}
          </a>  
        </li>`);
    }
  });
});
