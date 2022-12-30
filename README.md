# React App Gallery

Built using `React Js`

This is a simple project to demonstrate the feature of filtering the contents of the gallery based on the tags available.

### How it works ?

 - We have ceated a list of tags which is our second component shown on the top of the app. This tags are nothing but few button elements which has differnet categories in it.
 - We have also created a file which has all the contents to fetch (_consider this as our API_).
 - By default we set the content data and pass as Props to the cards component.
 - After clicking any of the buttons we run a filter function which updates our content data based upon the tag and update the state to re-render the component.
