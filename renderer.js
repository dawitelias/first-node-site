var fs = require("fs"); // require file system

// merge values with content
function mergeValues(values, content) {
  // loop through keys
  for (var key in values) {
    /* could do: var.avatarUrl === values["avatarUrl"] but
       this is not dynamic */
    // replace all {{keys}} with the value from the object
    content = content.replace("{{"+key+"}}", values[key]);
  }
  // return merged content
  return content;
}

// Function that handles the reading of files and merge in values
  // read from file and get a string
    // merge values in to string
function view(templateName, values, response) {
  // Read from the template file
  var fileContents = fs.readFileSync('./views/'+templateName+".html", {encoding: "utf8"});
  // Insert values into the content
  fileContents = mergeValues(values, fileContents);
  // Write out the contents to the response
  response.write(fileContents);

}

module.exports.view = view;
