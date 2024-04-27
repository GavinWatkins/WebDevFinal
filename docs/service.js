//Client service.js
const baseURL = "https://booksitething.azurewebsites.net";
// const baseURL = "https://booksitething.azurewebsites.net";
export const GetAllBooks = async () => {
    const url = baseURL + "/books";
    const response = await fetch(url);
    return await response.json();
}


export const ResetStorage = () => {
    localStorage.clear();
};

export const SaveToStorage = (cart) => {
    //make array into a string
    console.log(cart);
    const listAsString = JSON.stringify(cart);
    
    //store it in the server with a key attached
    localStorage.setItem("myCart", listAsString);
};

export const LoadFromStorage = () => {
    //pull information from the server with a key
    const dataFromStorage = localStorage.getItem("myCart");
    
    //change your pulled information to an array of objects
    const objectList = JSON.parse(dataFromStorage);

    console.log(objectList);
    return objectList;
};



//api program.cs

// var builder = WebApplication.CreateBuilder(args);

// builder.Services.AddCors();
// var app = builder.Build();
// app.UseCors(
//     options =>
//         options
//             .AllowAnyHeader()
//             .AllowAnyOrigin()
//             .AllowAnyMethod()
// );

// var users = new List<User>()
// {
//     new User("Yes Man", Guid.NewGuid()),
//     new User("No Man", Guid.NewGuid())
// };

// app.MapGet("/userAccounts", () => {
//     return users;
// });

// app.MapPost("/userAccount", (UserCreationRequest userRequest) => {
//     var newUser = new User(userRequest.UserName, Guid.NewGuid());
//     users.Add(newUser);
// });

// app.Run();

// record User(string UserName, Guid Id);

// record UserCreationRequest(string UserName);

//Client domain.js
//array = GetAllUserAccounts
//export array to UI

//Client ui.js
// const renderUserAccounts = async () => {
//     const userAccounts = await GetAllUserAccounts();
//     console.log(userAccounts);
    
//     const containerElement = document.getElementById("userContainer");
//     containerElement.replaceChildren();
    
//     userAccounts.forEach(user => {
//         const userCard = document.createElement("div");
//         userCard.innerText = `${user.userName} - ${user.id}`;
//         containerElement.appendChild(userCard);
//     });