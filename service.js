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



//Client service.js
// export const GetAllUserAccounts = async () => {
//     const url = "http://localhost:5261/userAccounts";
//     const response = await fetch(url);
//     return await response.json();
// }

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