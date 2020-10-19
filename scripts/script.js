function appendToToolsNav(){
        var ul = document.getElementById('tools');
        var li = document.createElement('li');
       //Create anchor element
        var a = document.createElement('a');

        //Create the text node for anchor element
        var link = document.createTextNode("Validate HTML");

        //Append text node to anchor element
        a.appendChild(link);

        //Set title
        a.title = link;

        //Set href property
        a.href = "https://validator.w3.org/nu/?doc="+ document.URL;
        
        li.setAttribute("id", "ValidateHTML"); // added line
        li.appendChild(a);
        ul.appendChild(li);
        //alert(li.id);
}
appendToToolsNav()