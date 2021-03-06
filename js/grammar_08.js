function g_08(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(4);
        PRPArray = [{PRP: "I", RESPONSE: "me", OBJ: "you"}, {PRP: "you", RESPONSE: "you", OBJ: "me"}, {PRP: "you", RESPONSE: "us", OBJ: "us"}, {PRP: "they", RESPONSE: "them", OBJ: "them"}, {PRP: "he", RESPONSE: "him", OBJ: "him"}, {PRP: "she", RESPONSE: "her", OBJ: "her"}, {PRP: "we", RESPONSE: "you", OBJ: "you"}];
        shuffleArray(PRPArray);
        PERSONArray = ["My mom", " My dad", "Their son", "Their daughter", "His wife", "Her husband"];
        shuffleArray(PERSONArray);
        NOUNArray = [" the cake", " the pen", " the sandwich", " the chocolate", " the markers", " the toy", " the model car", " the doll", " the pencil", " the book", " the school bag", " the notebook", " the eraser", " the pencil case", " the hat", " the belt"];
        shuffleArray(NOUNArray);
        if (randomG == 0) {
            document.getElementById("gPic").src = "Level 8/images/give to.png";
            sentence = "Who gave" + NOUNArray[0] + " to " + PRPArray[0].OBJ + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " gave" + NOUNArray[0] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[0] = PERSONArray[0] + " gave" + NOUNArray[0] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[1] = PERSONArray[0] + " gave" + NOUNArray[1] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[2] = PERSONArray[0] + " gave" + NOUNArray[2] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[3] = PERSONArray[0] + " gave" + NOUNArray[3] + " to " + PRPArray[0].RESPONSE + ".";
        } else if (randomG == 1) {
            document.getElementById("gPic").src = "Level 8/images/bring for.png";
            sentence = "Who brought" + NOUNArray[0] + " for " + PRPArray[0].OBJ + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " brought" + NOUNArray[0] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[0] = PERSONArray[0] + " brought" + NOUNArray[0] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[1] = PERSONArray[0] + " brought" + NOUNArray[1] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[2] = PERSONArray[0] + " brought" + NOUNArray[2] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[3] = PERSONArray[0] + " brought" + NOUNArray[3] + " for " + PRPArray[0].RESPONSE + ".";
        } else if (randomG == 2) {
            document.getElementById("gPic").src = "Level 8/images/give to.png";
            sentence = "Who gave " + PRPArray[0].OBJ + " " + NOUNArray[0] + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[0] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[1] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[1] + ".";
            sentenceArray[2] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[2] + ".";
            sentenceArray[3] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[3] + ".";
        } else {
            document.getElementById("gPic").src = "Level 8/images/bring for.png";
            sentence = "Who brought " + PRPArray[0].OBJ + " " + NOUNArray[0] + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[0] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[1] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[1] + ".";
            sentenceArray[2] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[2] + ".";
            sentenceArray[3] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[3] + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 2") {
        randomG = randG(2);
        if (randomG < 1){
            ADJArray = [{NN: "Number 1 is ", COMP: "faster", pic:"Level 8/images/fast.png"}, {NN: "Number 4 ", COMP: "slower", pic:"Level 8/images/slow.png"}, {NN: "The orange cat ", COMP: "fatter", pic:"Level 8/images/fat.png"}, {NN: "The woman in the blue dress ", COMP: "slimmer", pic:"Level 8/images/slim.png"}];
            shuffleArray(ADJArray);
            sentence = "Who is " + ADJArray[0].COMP + "?";
        } else {
            ADJArray = [{NN: "The doll on the left ", COMP: "prettier", pic:"Level 8/images/pretty.png"}, {NN: "The duck on the right ", COMP: "uglier", pic:"Level 8/images/ugly.png"}, {NN: "The orange ball ", COMP: "bigger", pic:"Level 8/images/big.png"}, {NN: "The blue ball ", COMP: "smaller", pic:"Level 8/images/small.png"}];
            shuffleArray(ADJArray);
            sentence = "Which is " + ADJArray[0].COMP + "?";
        }
        document.getElementById("gPic").src = ADJArray[0].pic;
        document.getElementById("grammarCheck").value = ADJArray[0].NN + "is " + ADJArray[0].COMP + ".";
        sentenceArray[0] = ADJArray[0].NN + "is " + ADJArray[0].COMP + ".";
        sentenceArray[1] = ADJArray[0].NN + "is " + ADJArray[1].COMP + ".";
        sentenceArray[2] = ADJArray[0].NN + "is " + ADJArray[2].COMP + ".";
        sentenceArray[3] = ADJArray[0].NN + "is " + ADJArray[3].COMP + ".";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 3") {
        randomG = randG(2);
        if (randomG < 1){
        ADJArray = [{NN1: "The boy on the right", NN2: "the boy on the left", COMP: "more handsome", pic: "Level 8/images/handsome.png"}, {NN1: "The girl on the right", NN2: "the girl on the left", COMP: "more beautiful", pic: "Level 8/images/beautiful.png"}];
        shuffleArray(ADJArray);
        sentence = "Who is " + ADJArray[0].COMP + "?";
        document.getElementById("gPic").src = ADJArray[0].pic;
        document.getElementById("grammarCheck").value = ADJArray[0].NN1 + " is " + ADJArray[0].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[0] = ADJArray[0].NN1 + " is " + ADJArray[0].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[1] = ADJArray[0].NN1 + " is " + ADJArray[1].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[2] = "";
        sentenceArray[3] = "";
    } else {
        ADJArray = [{NN1: "The box on the right", NN2: "the box on the left", COMP: "heavier", pic: "Level 8/images/heavy.png"}, {NN1: "The tablet", NN2: "the laptop", COMP: "lighter", pic: "Level 8/images/light.png"}, {NN1: "The cookie", NN2: "the chocolate bar", COMP: "cheaper", pic: "Level 8/images/cheap.png"}, {NN1: "The movie theater", NN2: "the bookstore", COMP: "more modern", pic: "Level 8/images/modern.png"}, {NN1: "The problem on the right", NN2: "the problem on the left", COMP: "more difficult", pic: "Level 8/images/difficult.png"}, {NN1: "The red watch", NN2: "the blue watch", COMP: "more expensive", pic: "Level 8/images/expensive.png"}, {NN1: "The lion on the right", NN2: "the lion on the left", COMP: "more dangerous", pic: "Level 8/images/dangerous.png"}];
        shuffleArray(ADJArray);
        sentence = "Which is " + ADJArray[0].COMP + "?";
        document.getElementById("gPic").src = ADJArray[0].pic;
        document.getElementById("grammarCheck").value = ADJArray[0].NN1 + " is " + ADJArray[0].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[0] = ADJArray[0].NN1 + " is " + ADJArray[0].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[1] = ADJArray[0].NN1 + " is " + ADJArray[1].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[2] = ADJArray[0].NN1 + " is " + ADJArray[2].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[3] = ADJArray[0].NN1 + " is " + ADJArray[3].COMP + " than " + ADJArray[0].NN2 + ".";
    }   
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 1") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(unitArray);
        g_08(unitArray[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        randomG = randG(2);
        if (randomG < 1) {
            VOCArray = [{NN1: "The boy", LOC: "on the right", NN2: "the boy", COMP: "has less hair", pic: "Level 8/images/little.png"}, {NN1: "The boy", LOC: "on the left", NN2: "the boy", COMP: "has more hair", pic: "Level 8/images/little.png"}, {NN1: "The boy", LOC: "on the right", NN2: "the boy", COMP: "has more ice cream", pic: "Level 8/images/much.png"}, {NN1: "The boy", LOC: "on the left", NN2: "the boy", COMP: "has less ice cream", pic: "Level 8/images/much.png"}, {NN1: "The man", LOC: "on the right", NN2: "the man", COMP: "is stronger", pic: "Level 8/images/strong.png"}, {NN1: "The man", LOC: "on the left", NN2: "the man", COMP: "is weaker", pic: "Level 8/images/strong.png"}, {NN1: "The boy", LOC: "on the right", NN2: "the boy", COMP: "is weaker", pic: "Level 8/images/weak.png"}, {NN1: "The boy", LOC: "on the left", NN2: "the boy", COMP: "is stronger", pic: "Level 8/images/weak.png"}];
            shuffleArray(VOCArray);
            sentence = "Who " + VOCArray[0].COMP + "?";
            document.getElementById("gPic").src = VOCArray[0].pic;
            document.getElementById("grammarCheck").value = VOCArray[0].NN1 + " " + VOCArray[0].LOC + " " + VOCArray[0].COMP + " than " + VOCArray[0].NN2 + ".";
            sentenceArray[0] = VOCArray[0].NN1 + " on the right " + VOCArray[0].COMP + " than " + VOCArray[0].NN2 + " on the left.";
            sentenceArray[1] = VOCArray[0].NN1 + " on the left "  + VOCArray[0].COMP + " than " + VOCArray[0].NN2 + "on the right.";
            sentenceArray[2] = "";
            sentenceArray[3] = "";
        } else {    
            VOCArray = [{NN1: "The blue car", NN2: "the orange car", COMP: "better", pic: "Level 8/images/better.png"}, {NN1: "The orange car", NN2: "the blue car", COMP: "worse", pic: "Level 8/images/better.png"}, {NN1: "30", NN2: "50", COMP: "worse", pic: "Level 8/images/worse.png"}, {NN1: "50", NN2: "30", COMP: "better", pic: "Level 8/images/worse.png"}];
            shuffleArray(VOCArray);
            sentence = "Which is " + VOCArray[0].COMP + "?";
            document.getElementById("gPic").src = VOCArray[0].pic;
            document.getElementById("grammarCheck").value = VOCArray[0].NN1 + VOCArray[0].COMP + " than " + VOCArray[0].NN2 + ".";
            sentenceArray[0] = VOCArray[0].NN1 + " is " + VOCArray[0].COMP + " than " + VOCArray[0].NN2 + ".";
            sentenceArray[1] = VOCArray[0].NN2 + " is " + VOCArray[0].COMP + " than " + VOCArray[0].NN1 + ".";
            sentenceArray[2] = "";
            sentenceArray[3] = "";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 5") {
        randomG = randG(2);
        if (randomG < 1) {
            VOCArray = [{NN: "The child", LOC: "on the right", COMP: "the youngest", pic: "Level 8/images/young.png"}, {NN: "The child", LOC: "on the left", COMP: "the oldest", pic: "Level 8/images/young.png"}, {NN: "The man", LOC: "on the right", COMP: "the oldest", pic: "Level 8/images/old.png"}, {NN: "The man", LOC: "on the left", COMP: "the youngest", pic: "Level 8/images/old.png"}, {NN: "The boy", LOC: "on the left", COMP: "the wettest", pic: "Level 8/images/wet.png"}, {NN: "The boy", LOC: "on the right", COMP: "the dirtiest", pic: "Level 8/images/dirty.png"}, {NN: "The boy", LOC: "on the left", COMP: "the cleanest", pic: "Level 8/images/dirty.png"}];
            shuffleArray(VOCArray);
            sentence = "Who is " + VOCArray[0].COMP + "?";
            
            
        } else {    
            VOCArray = [{NN: "The glass", LOC: "in the middle", COMP: "the cleanest", pic: "Level 8/images/clean.png"}, {NN: "The glass", LOC: "on the left", COMP: "the dirtiest", pic: "Level 8/images/clean.png"}, {NN: "The problem", LOC: "on the right", COMP: "the easiest", pic: "Level 8/images/easy.png"}];
            shuffleArray(VOCArray);
            sentence = "Which is " + VOCArray[0].COMP + "?";
        }
        document.getElementById("gPic").src = VOCArray[0].pic;
        document.getElementById("grammarCheck").value = VOCArray[0].NN + " " + VOCArray[0].LOC +  " is " + VOCArray[0].COMP + ".";
        sentenceArray[0] = VOCArray[0].NN + " on the left is " + VOCArray[0].COMP + ".";
        sentenceArray[1] = VOCArray[0].NN + " in the middle is " + VOCArray[0].COMP + ".";
        sentenceArray[2] = VOCArray[0].NN + " on the right is " + VOCArray[0].COMP + ".";
        sentenceArray[3] = "";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 6") {
        randomG = randG(2);
        if (randomG < 1) {
            VOCArray = [{NN: "The boy", LOC: "on the right", COMP: "the most hardworking", pic: "Level 8/images/hardworking.png"}, {NN: "The boy", LOC: "on the right", COMP: "the most careful", pic: "Level 8/images/careful.png"}, {NN: "The boy", LOC: "on the left", COMP: "the most careless", pic: "Level 8/images/careful.png"}, {NN: "The boy", LOC: "on the right", COMP: "the most careless", pic: "Level 8/images/careless.png"}, {NN: "The boy", LOC: "on the left", COMP: "the most careful", pic: "Level 8/images/careless.png"}];
            shuffleArray(VOCArray);
            sentence = "Who is " + VOCArray[0].COMP + "?";
            document.getElementById("gPic").src = VOCArray[0].pic;
            document.getElementById("grammarCheck").value = VOCArray[0].NN + " " + VOCArray[0].LOC +  " is " + VOCArray[0].COMP + ".";
            sentenceArray[0] = VOCArray[0].NN + " on the left is " + VOCArray[0].COMP + ".";
            sentenceArray[1] = VOCArray[0].NN + " in the middle is " + VOCArray[0].COMP + ".";
            sentenceArray[2] = VOCArray[0].NN + " on the right is " + VOCArray[0].COMP + ".";
            sentenceArray[3] = "";
        } else {    
            VOCArray = [{NN1: "French fries are ", NN2: "Chicken nuggets are ", NN3: "Hamburgers are ", COMP: "the most popular", pic: "Level 8/images/popular.png"}, {NN1: "The picture on the right is ", NN2: "The picture in the middle is ", NN3: "The picture on the left is ", COMP: "the most colorful", pic: "Level 8/images/colorful.png"}, {NN1: "The red chair is ", NN2: "The yellow chair is ", NN3: "The green stool is ", COMP: "the most comfortable", pic: "Level 8/images/comfortable.png"}];
            shuffleArray(VOCArray);
            sentence = "Which is " + VOCArray[0].COMP + "?";
            document.getElementById("gPic").src = VOCArray[0].pic;
            document.getElementById("grammarCheck").value = VOCArray[0].NN1 + VOCArray[0].COMP + ".";
            sentenceArray[0] = VOCArray[0].NN1 + VOCArray[0].COMP + ".";
            sentenceArray[1] = VOCArray[0].NN2 + VOCArray[0].COMP + ".";
            sentenceArray[2] = VOCArray[0].NN3 + VOCArray[0].COMP + ".";
            sentenceArray[3] = "";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 2") {
        unitArray = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(unitArray);
        g_08(unitArray[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        randomG = randG(2);
        if (randomG < 1) {
            VOCArray = [{NN: "The boy", LOC: "on the right", COMP: "is the best", pic: "Level 8/images/best.png"}, {NN: "The boy", LOC: "on the left", COMP: "is the worst", pic: "Level 8/images/best.png"}, {NN: "The girl", LOC: "on the right", COMP: "has the most money", pic: "Level 8/images/most.png"}, {NN: "The girl", LOC: "on the left", COMP: "has the least money", pic: "Level 8/images/most.png"}, {NN: "The elephant", LOC: "on the left", COMP: "is the worst", pic: "Level 8/images/worst.png"}, {NN: "The elephant", LOC: "on the right", COMP: "is the best", pic: "Level 8/images/worst.png"}];
            shuffleArray(VOCArray);
            sentence = "Who " + VOCArray[0].COMP + "?";
        } else {    
            VOCArray = [{NN: "The glass", LOC: "on the right", COMP: "has the least juice", pic: "Level 8/images/least.png"}, {NN: "The glass", LOC: "on the left", COMP: "has the most juice", pic: "Level 8/images/least.png"}, {NN: "The mountain", LOC: "on the right", COMP: "is the highest", pic: "Level 8/images/high.png"}, {NN: "The mountain", LOC: "on the left", COMP: "is the lowest", pic: "Level 8/images/high.png"}, {NN: "The table", LOC: "on the right", COMP: "is the lowest", pic: "Level 8/images/low.png"}, {NN: "The table", LOC: "on the left", COMP: "is the highest", pic: "Level 8/images/low.png"}];
            shuffleArray(VOCArray);
            sentence = "Which " + VOCArray[0].COMP + "?";
        }
        document.getElementById("gPic").src = VOCArray[0].pic;
        document.getElementById("grammarCheck").value = VOCArray[0].NN + " " + VOCArray[0].LOC + " " + VOCArray[0].COMP + ".";
        sentenceArray[0] = VOCArray[0].NN + " on the left " + VOCArray[0].COMP + ".";
        sentenceArray[1] = VOCArray[0].NN + " in the middle " + VOCArray[0].COMP + ".";
        sentenceArray[2] = VOCArray[0].NN + " on the right " + VOCArray[0].COMP + ".";
        sentenceArray[3] = "";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 8") {
        randomG = randG(2);
        if (randomG < 1){
            VOCArray = [{NN: "ice", LOC:"glass",  pic: "Level 8/images/ice.png"}, {NN: "juice", LOC:"glass",  pic: "Level 3/images/juice.png"}, {NN: "milk", LOC:"bottle",  pic: "Level 3/images/milk.png"}, {NN: "water", LOC:"bottle",  pic: "Level 6/images/a bottle of water.png"}, {NN: "ice cream", LOC:"bowl",  pic: "Level 3/images/ice cream.png"}];
            shuffleArray(VOCArray);
            document.getElementById("gPic").src = VOCArray[0].pic;
            QUANTArray = ["a lot of", "a little", "some"];
            shuffleArray(QUANTArray);
            sentence = "How much " + VOCArray[0].NN + " is there in the " + VOCArray[0].LOC + "?";
            document.getElementById("grammarCheck").value = "There is " + QUANTArray[0] + " " + VOCArray[0].NN + " in the " + VOCArray[0].LOC + ".";
            sentenceArray[0] = "There is " + QUANTArray[0] + " " + VOCArray[0].NN + " in the " + VOCArray[0].LOC + ".";
            sentenceArray[1] = "There is " + QUANTArray[0] + " " + VOCArray[1].NN + " in the " + VOCArray[0].LOC + ".";
            sentenceArray[2] = "There is " + QUANTArray[0] + " " + VOCArray[2].NN + " in the " + VOCArray[0].LOC + ".";
            sentenceArray[3] = "There is " + QUANTArray[0] + " " + VOCArray[3].NN + " in the " + VOCArray[0].LOC + ".";
        } else {
            VOCArray = [{NN: "penguins", LOC: "in the zoo", pic: "Level 8/images/penguin.png"}, {NN: "giraffes", LOC: "in the zoo", pic: "Level 8/images/giraffe.png"}, {NN: "koalas", LOC: "in the zoo", pic: "Level 8/images/koala.png"}, {NN: "crocodiles", LOC: "in the zoo", pic: "Level 8/images/crocodile.png"}, {NN: "kangaroos", LOC: "in the zoo", pic: "Level 8/images/kangaroo.png"}, {NN: "camels", LOC: "in the zoo", pic: "Level 8/images/camel.png"}, {NN: "pandas", LOC: "in the zoo", pic: "Level 8/images/panda.png"}, {NN: "peacocks", LOC: "in the zoo", pic: "Level 8/images/peacock.png"}, {NN: "dolphins", LOC: "in the zoo", pic: "Level 1/images/dolphin.png"}, {NN: "boys", LOC: "in your class", pic: "Level 1/images/boy.png"}, {NN: "girls", LOC: "in your class", pic: "Level 8/images/girl.png"}];
            shuffleArray(VOCArray);
            document.getElementById("gPic").src = VOCArray[0].pic;
            QUANTArray = ["a few", "some", "many", "a lot of", "three", "ten"];
            shuffleArray(QUANTArray);
            sentence = "How many " + VOCArray[0].NN + " are there " + VOCArray[0].LOC + " ?";
            document.getElementById("grammarCheck").value = "There are " + QUANTArray[0] + " " + VOCArray[0].NN + " " + VOCArray[0].LOC + ".";
            sentenceArray[0] = "There are " + QUANTArray[0] + " " + VOCArray[0].NN + " " + VOCArray[0].LOC + ".";
            sentenceArray[1] = "There are " + QUANTArray[0] + " " + VOCArray[1].NN + " " + VOCArray[0].LOC + ".";
            sentenceArray[2] = "There are " + QUANTArray[0] + " " + VOCArray[2].NN + " " + VOCArray[0].LOC + ".";
            sentenceArray[3] = "There are " + QUANTArray[0] + " " + VOCArray[3].NN + " " + VOCArray[0].LOC + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 9") {
        randomG = randG(3);
        if (randomG == 0) {
            VOCArray = [{NN: "biscuits", pic: "Level 8/images/biscuit.png"}, {NN: "sweets", pic: "Level 8/images/sweets.png"}];
            shuffleArray(VOCArray);
            sentence = "Are there any " + VOCArray[0].NN + " in the cupboard?";
            randomG = randG(2);
            if (randomG < 1) {
                document.getElementById("gPic").src = VOCArray[0].pic;
                document.getElementById("grammarCheck").value = "Yes, there are some " + VOCArray[0].NN + " in the cupboard.";
                sentenceArray[0] = "Yes, there are some " + VOCArray[0].NN + " in the cupboard.";
                sentenceArray[1] = "Yes, there are any " + VOCArray[0].NN + " in the cupboard.";
                sentenceArray[2] = "Yes, there are every " + VOCArray[0].NN + " in the cupboard.";
                sentenceArray[3] = "Yes, there are all " + VOCArray[0].NN + " in the cupboard.";
            } else {
                document.getElementById("gPic").src = VOCArray[1].pic;
                document.getElementById("grammarCheck").value = "No, there are no " + VOCArray[0].NN + " in the cupboard.";
                sentenceArray[0] = "No, there are no " + VOCArray[0].NN + " in the cupboard.";
                sentenceArray[1] = "No, there are some " + VOCArray[0].NN + " in the cupboard.";
                sentenceArray[2] = "No, there are any " + VOCArray[0].NN + " in the cupboard.";
                sentenceArray[3] = "No, there are every " + VOCArray[0].NN + " in the cupboard.";
            }
        } else if (randomG == 1) {
            VOCArray = [{NN: "lemonade", pic: "Level 8/images/lemonade.png"}, {NN: "ketchup", pic: "Level 8/images/ketchup.png"}, {NN: "butter", pic: "Level 8/images/butter.png"}, {NN: "cheese", pic: "Level 8/images/cheese.png"}, {NN: "peanut butter", pic: "Level 8/images/peanut butter.png"}];
            shuffleArray(VOCArray);
            sentence = "Is there any " + VOCArray[0].NN + " in the refrigerator?";
            randomG = randG(2);
            if (randomG < 1) {
                document.getElementById("gPic").src = VOCArray[0].pic;
                document.getElementById("grammarCheck").value = "Yes, there is some " + VOCArray[0].NN + " in the refrigerator.";
                sentenceArray[0] = "Yes, there is some " + VOCArray[0].NN + " in the refrigerator.";
                sentenceArray[1] = "Yes, there is any " + VOCArray[0].NN + " in the refrigerator.";
                sentenceArray[2] = "Yes, there is every " + VOCArray[0].NN + " in the refrigerator.";
                sentenceArray[3] = "Yes, there is all " + VOCArray[0].NN + " in the refrigerator.";
            } else {
                document.getElementById("gPic").src = VOCArray[1].pic;
                document.getElementById("grammarCheck").value = "No, there is no " + VOCArray[0].NN + " in the refrigerator.";
                sentenceArray[0] = "No, there is no " + VOCArray[0].NN + " in the refrigerator.";
                sentenceArray[1] = "No, there is some " + VOCArray[0].NN + " in the refrigerator.";
                sentenceArray[2] = "No, there is any " + VOCArray[0].NN + " in the refrigerator.";
                sentenceArray[3] = "No, there is every " + VOCArray[0].NN + " in the refrigerator.";
            }
        } else {
            document.getElementById("gPic").src = "Level 8/images/biscuit.png";
            ADJArray = ["strawberry", "lemon", "chocolate", "peanut butter"];
            shuffleArray(ADJArray);
            sentence = "Are the biscuits all " + ADJArray[0] + " flavored?";
            randomG = randG(2);    
            if (randomG < 1) {
                document.getElementById("grammarCheck").value = "Yes, every one of them is " + ADJArray[0] + " flavored.";
                sentenceArray[0] = "Yes, every one of them is " + ADJArray[0] + " flavored.";
                sentenceArray[1] = "Yes, every one of them is " + ADJArray[1] + " flavored.";
                sentenceArray[2] = "Yes, every one of them is " + ADJArray[2] + " flavored.";
                sentenceArray[3] = "Yes, every one of them is " + ADJArray[3] + " flavored.";
            } else {
                document.getElementById("grammarCheck").value = "No, some of them are " + ADJArray[1] + " flavored.";
                sentenceArray[0] = "No, some of them are " + ADJArray[1] + " flavored.";
                sentenceArray[1] = "No, any of them are " + ADJArray[1] + " flavored.";
                sentenceArray[2] = "No, some of them are " + ADJArray[0] + " flavored.";
                sentenceArray[3] = "No, any of them are " + ADJArray[0] + " flavored.";
            }
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 3") {
        unitArray = ["Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_08(unitArray[0]);
        currentUnit = "Review 3";
    } else if (userInput == "Final Review") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_08(unitArray[0]);
        currentUnit = "Final Review";
    } else {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
    }
    shuffleArray(sentenceArray);
    document.getElementById("g0r1d0").textContent = sentenceArray[0];
    document.getElementById("g0r1d2").textContent = sentenceArray[1];
    document.getElementById("g0r2d0").textContent = sentenceArray[2];
    document.getElementById("g0r2d2").textContent = sentenceArray[3];
    document.getElementById("grammar_links").innerHTML = gLinks;
    document.getElementById('g_request').textContent = sentence;
}