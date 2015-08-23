# ReactJS

### Useful non-DOM attributes

In this section, we will learn some non-DOM attributes that can be used with the JSX element. The following list contains some of the non-DOM attributes:

* `key`: This is an optional attribute that can be used to uniquely identify each component in the page
* `ref`: This is an optional attribute that can be used to access the child element from outside the `render` method.
* `dangerouslySetInnerHTML`: This attribue can be used inside the JSX element to set HTML content inside the component.

Let's check out a simple example with the use of these three attributes. The code for this example is as follows.

```javascript
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title> ReactJS NonDOM Attribute Demo </title>
    <script src="bower_components/react/react.js"></script>
    <script src="bower_components/react/JSXTransformer.js"></script>
</head>
<body>
<script type="text/jsx">
    var StudentsReport = React.createClass({
        render: function() {
            var studentDetails = {
                headerHTML:{
                    __html: "<i>Student List</i>"
                },
                subject:"Mathematics",
                list: [
                    {roll:123, name:"Sandeep"},
                    {roll:124, name:"Surabhi"}
                ]
            };
            return (
              <div>
                <h1 dangerouslySetInnerHTML={studentDetails.headerHTML}>
                </h1>
                  <h3 ref="subjectName">{studentDetails.subject}</h3>
                <ol>
                {studentDetails.list.map(function(student) {
                    return <li key={student.roll}>{student.name}</li>;
                })}
                </ol>
                  <button onClick={this.logSubject}>Log Subject</button>
              </div>
            );
        },
      logSubject: function(event){
        console.log("Subject React Element: ",this.refs.subjectName);
        console.log("Subject DOM Element: ",this.refs.subjectName.getDOMNode());
        }
    });
    React.render(<StudentsReport />, document.body);
</script>
</body>
</html>
```
