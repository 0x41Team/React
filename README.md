# ReactJS

### ReactJS inline style

In ReactJS, we can add an inline style using the `style` attribute and ReactJS expression. ReactJS takes inline style as a Javascript `anonymous object containing` a key/value pair representing properties and their values separated with a colon (`:`). The following syntax shows the Javascript object for inline style:

```javascript
var styleObject = {
    styleAttribute: "styleValue"
};
```
* `styleAttribute`: This represents the CSS property name as key. The name should follow `camelCase` representation. For example, the `box-shadow` style attribute becomes `boxShadow`. The vender prefix attribute starts with a capital letter except `ms` (Microsoft Internet Explorer).
* `styleValue`: This represents a value for the CSS property, and it is in string format. For example, `1px solid grey` should be wrapped in double quotes like `"1px solid grey"`. 

Let's check out an example for using inline style in a ReactJS element. The code for the ReactJS element is as follows:

```HTML
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>ReactJS inline style demo</title>
    <script src="bower_components/react/react.js"></script>
    <script src="bower_components/react/JSXTransformer.js"></script>
</head>
<body>
<script type="text/jsx">
    var messageStyle={
            color: "red",
            border:"1px solid grey",
            boxShadow:"2px 2px 2px lightGrey",
            padding: "20px",
            width: "200px"
        },
        GoodMorning = React.createClass({
            render: function() {
                return (
                  <div style={messageStyle}>
                    Good Morning Developers
                  </div>
                );
            }
    });
    React.render(<GoodMorning/>, document.body);
</script>
</body>
</html>
```

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

### ReactJS initialization phase

In this phase, a ReactJS element instance is created for the first time and rendered in the browser. ReactJS provides a set of methods for the setup and preprocessing during this phase. During initialization of an element, the methods are called in a specific order. The following diagram shows the order in which the callback methods are called during the initialization phase.

![ReactJS Rendering flow](https://raw.githubusercontent.com/0xgi/Docs/master/images/reactFlow.jpg)

The details of these methods are as follows:

* `getDefaultProps`: This method is used to created default properties for a ReactJS element. This method must return an object or NULL.
* `getInitialState`: This method is used to created states for the component. This method must return an object or NULL.
* `componentWillMount`: This method get executed just before the component is mounted to the page.
* `render`: This method returns the ReactJS component tree for rendering in the browser.
* `componentDidMount`: This method gets executed just after the initial rendering of the component in the browser.

### ReactJS lifetime phase

Once the ReactJS component is instantiated successfully, the lifetime phase starts. In this phase, the component can go through many changes. These changes include a change in the current state, or a change in any property value. ReactJS provides a set of callback methods for overriding and implementing our own logic for these states. The following diagram shows the order in which the callback methods are called during lifetime phase:

![ReactJS Rendering flow](https://raw.githubusercontent.com/0x41Team/Docs/master/images/flow-reactjs.jpg)

The details of these methods are as follows:

* `componentWillRecieveProps`: This methods gets executed whenever a new property is created for the component.
* `shouldComponentUpdate`: This method returns a Boolean value `true` or `false`. The `true` flag indicates that the `render` method will be called when a new property is received.
* `componentWillUpdate`: This method get executed just before the new property is received by the component. It provides an opportunity for preprocessing before the `render` method is called.
* `render`: This method return the updated component tree for rendering in the browser.
* `componentDidUpdate`: This method gets executed just after the modified changes are rendered in the browser.


