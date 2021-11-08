class Form
{
    constructor()
    {
        this.title = createElement("h1");
        this.input = createInput("").attribute("placeholder", "Enter Your Username");
        this.play = createButton("Play");

        this.maleButton = createButton("Male");
        this.femaleButton = createButton("Female");

        this.playerGender = 0;
    }

    display()
    {
        this.title.position(width/2 - 135, 50);
        this.title.html("Tricky Jumps");
        this.title.class("resetText");

        this.input.position(width/2-110, height/2 - 80);
        this.input.class("customInput");

        this.play.position(width/2 - 85, height-160);
        this.play.class("customButton");

        this.maleButton.position(width/2 - 190, height/2 + 80);
        this.maleButton.class("maleCustomButton");

        this.femaleButton.position(width/2 + 12, height/2 + 80);
        this.femaleButton.class("femaleCustomButton");

        this.playerButton();
    }

    playerButton()
    {
        this.maleButton.mousePressed(()=>{
            database.ref("/").update({
                Gender: 1
            });
        })
        this.femaleButton.mousePressed(()=>{
            database.ref("/").update({
                Gender: 2
            });
        });

        var x = this.input.value();

        database.ref("/").update({
            PlayerName: x
        });
        
        //console.log(x);

        this.play.mousePressed(()=>{
            this.hideForm();
            this.createCharacter();
        });
    }

    hideForm()
    {
        this.title.hide();
        this.input.hide();
        this.play.hide();
        this.maleButton.hide();
        this.femaleButton.hide();
    }

    createCharacter()
    {
        var player = createSprite(200, 200, 200, 200);

        //this.getValue();

        if(this.getValue())
        {
            console.log(playerGender);
            if(playerGender == 1)
            {
                console.log("Male");

                //player.addImage(boyImg);
            }
            if(playerGender == 2)
            {
                console.log("Female");

                //player.addImage(girlImg);
            }
        }

        //console.log(player);
    }

    getValue()
    {
        database.ref("Gender").on("value", function(data){
            playerGender = data.val();
            console.log(typeof playerGender);
        });
    }
}