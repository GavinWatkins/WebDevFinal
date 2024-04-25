var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
var app = builder.Build();
app.UseCors(
    options =>
        options
            .AllowAnyHeader()
            .AllowAnyOrigin()
            .AllowAnyMethod()
);

var books = new List<Book>()
{
    new Book("The Glimmer Crisis", 300, "$20.00", "Monsters have always existed. They've just gotten really good at hiding, when they follow the rules. It's Kevin's job to make sure the monsters (known as Myths) keep the rules. However, things start to go wrong when something happens to the supply of Glimmer which all Myths rely on to stay hidden."),
    new Book("The Strongest Mindbender", 300, "$25.00", "Some Myths have adjusted to the world outside of the Vale quite well. Others, like Kevin, are having a difficult time finding their place in the larger world. Kevin has made it his goal to gather up all of the Fiction escapees (while also stopping any other trouble-making Myths who rear their heads). Things get more complicated once the little girl of Todd and Claire goes missing, and Will is the suspect."),
    new Book("The Collector of Death", 300, "$20.00", "Unbeknownst to most, the world exists in the balance of good and evil. Tainted energy is what propels this balance. Tainted energy, if left to grow out of hand, forms Demons (nightmarish creatures invisible to most). Tainted energy can also be harnessed by a select few to destroy Demons. After the strongest Demon Zarich was trapped in an ancient dagger, good began to get the upper hand. Until the power of the dagger was unleashed, releasing Zarich's sould once more.")
};

app.MapGet("/books", () => {
    return books;
});

app.Run();

record Book(string title, int pageCount, string price, string description);