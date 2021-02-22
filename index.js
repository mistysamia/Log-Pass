
        const generateButton = document.getElementById("Generate");
        generateButton.addEventListener("click", function () {
            //  console.log("CHECKING");
            const PassLen = document.getElementById("length").value;
            const PassLenINT = parseInt(PassLen);
            //console.log(PassLenINT);
            var SmInt = -1, NmInt = -1, ExInt = -1, LowInt = -1, UpInt = -1;



            let SymbolsIn, NumbersIn, LowercaselsIn, UppercaseIn, ExcludesimilarIn;
            const rbs1 = document.querySelectorAll('input[name="Symbolchoice"]');

            for (const rb1 of rbs1) {
                if (rb1.checked) {
                    SymbolsIn = rb1.value;
                    break;
                }
            }
            if (SymbolsIn == "yes")
                SmInt = 1;
            else if (SymbolsIn == "no")
                SmInt = 0;

            console.log(SymbolsIn);
            console.log(SmInt);
            const rbs2 = document.querySelectorAll('input[name="Numberschoice"]');

            for (const rb2 of rbs2) {
                if (rb2.checked) {
                    NumbersIn = rb2.value;
                    break;
                }
            }
            if (NumbersIn == "yes")
                NmInt = 1;
            else if (NumbersIn == "no")
                NmInt = 0;

            console.log(NumbersIn);
            console.log(NmInt);

            const rbs3 = document.querySelectorAll('input[name="ExcludesimilarCharchoice"]');

            for (const rb3 of rbs3) {
                if (rb3.checked) {
                    ExcludesimilarIn = rb3.value;
                    break;
                }
            }
            if (ExcludesimilarIn == "yes")
                ExInt = 1;
            else if (ExcludesimilarIn == "no")
                ExInt = 0;

            console.log(ExcludesimilarIn);
            console.log(ExInt);



            const rbs4 = document.querySelectorAll('input[name="Lowercasechoice"]');

            for (const rb4 of rbs4) {
                if (rb4.checked) {
                    LowercaselsIn = rb4.value;
                    break;
                }
            }
            if (LowercaselsIn == "yes")
                LowInt = 1;
            else if (LowercaselsIn == "no")
                LowInt = 0;

            console.log(LowercaselsIn);
            console.log(LowInt);

            const rbs5 = document.querySelectorAll('input[name="Uppercasechoice"]');

            for (const rb5 of rbs5) {
                if (rb5.checked) {
                    UppercaseIn = rb5.value;
                    break;
                }
            }
            if (UppercaseIn == "yes")
                UpInt = 1;
            else if (UppercaseIn == "no")
                UpInt = 0;

            console.log(UppercaseIn);
            console.log(UpInt);



            var total = SmInt + NmInt + LowInt + UpInt;

            if (SmInt == -1 || NmInt == -1 || LowInt == -1 || UpInt == -1) {
                alert("You have to fill up all the information Boxes!!");
                document.getElementById("ShowPassword").value = "";
                document.getElementById("Symbolyes").checked = false;
                document.getElementById("Symbolno").checked = false;
                document.getElementById("Numbersyes").checked = false;
                document.getElementById("Numbersno").checked = false;
                document.getElementById("ExcludeSimilarCharyes").checked = false;
                document.getElementById("ExcludeSimilarCharno").checked = false;
                document.getElementById("Lowercaseyes").checked = false;
                document.getElementById("Lowercasesno").checked = false;
                document.getElementById("Uppercaseyes").checked = false;
                document.getElementById("Uppercasesno").checked = false;
                document.getElementById("length").value = "6";
            }
            else if ((PassLen < 6 || PassLen > 25) || (SmInt == 0 && NmInt == 0
                && LowInt == 0 && UpInt == 0) || total < 2) {
                alert("Minimum two 'Yes' requires excluding similar characters.");


                document.getElementById("ShowPassword").value = "";
                document.getElementById("Symbolyes").checked = false;
                document.getElementById("Symbolno").checked = false;
                document.getElementById("Numbersyes").checked = false;
                document.getElementById("Numbersno").checked = false;
                document.getElementById("ExcludeSimilarCharyes").checked = false;
                document.getElementById("ExcludeSimilarCharno").checked = false;
                document.getElementById("Lowercaseyes").checked = false;
                document.getElementById("Lowercasesno").checked = false;
                document.getElementById("Uppercaseyes").checked = false;
                document.getElementById("Uppercasesno").checked = false;
                document.getElementById("length").value = "6";
            }
            else {

                const inv = document.getElementById("invalid");
                inv.style.display = "none";
                var sum = SmInt + NmInt + LowInt + UpInt;
                var avg = Math.ceil(PassLenINT / sum);
                var upperAR = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                var lowerAR = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                var numberAR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                var symbolAR = ['-', '_', '+', '=', '{', '}', '[', ']', '|', '/', '>', '<', '@', '!'];

                var emptyString = "";

                var blank1 = [], blank2 = [], blank3 = [], blank4 = [];

                var tempavg = PassLenINT;
                console.log(avg);
                console.log(SmInt);
                console.log(NmInt);

                console.log(LowInt);
                console.log(UpInt);
                // console.log(ExInt);



                if (UpInt == 1) {
                    var temp = [];
                    while (avg > blank1.length && ExInt == 1) {
                        var x = ran(25);
                        temp.push(x);
                        var set_ob = new Set(temp);
                        for (var element of set_ob) {
                            blank1.push(element);
                        }
                    }
                    while (avg >= blank1.length && ExInt == 0) {
                        var x = ran(25);
                        blank1.push(x);
                    }

                    tempavg = tempavg - avg;
                }

                if (LowInt == 1) {
                    var temp = [];
                    while (avg > blank2.length && ExInt == 1) {
                        var x = ran(25);
                        temp.push(x);
                        var set_ob = new Set(temp);
                        for (var element of set_ob) {
                            blank2.push(element);
                        }
                    }
                    while (avg >= blank2.length && ExInt == 0) {
                        var x = ran(25);
                        blank2.push(x);
                    }
                    tempavg = tempavg - avg;
                }

                // var newavg =  Math.ceil(PassLenINT / 2);
                console.log("Misty");

                if (SmInt == 1) {
                    var temp = [];
                    while (avg > blank3.length && ExInt == 1) {
                        var x = ran(13);
                        temp.push(x);
                        var set_ob = new Set(temp);
                        for (var element of set_ob) {
                            blank3.push(element);
                        }
                    }
                    while (avg >= blank3.length && ExInt == 0) {
                        var x = ran(13);
                        blank3.push(x);
                    }
                    tempavg = tempavg - avg;
                }

                if (NmInt == 1) {
                    console.log("here");
                    console.log(tempavg);
                    var temp = [];
                    while (tempavg >= blank4.length && ExInt == 1) {
                        var x = ran(9);
                        temp.push(x);
                        var set_ob = new Set(temp);
                        for (var element of set_ob) {
                            blank4.push(element);
                        }
                    }
                    while (tempavg >= blank4.length && ExInt == 0) {
                        var x = ran(9);
                        blank4.push(x);
                    }
                    console.log(blank4);
                    //tempavg = PassLenINT - avg;
                }
                console.log("Array");
                console.log(blank3);
                console.log(blank4);
                console.log(blank2);
                console.log(blank1);

                for (var i = 0; i < blank1.length && UpInt == 1; i++) {
                    emptyString += upperAR[blank1[i]];
                }
                console.log("1");
                console.log(emptyString);
                for (var i = 0; i < blank2.length && LowInt == 1; i++) {
                    emptyString += lowerAR[blank2[i]];
                }
                console.log("2");
                console.log(emptyString);
                for (var i = 0; i < blank4.length && NmInt == 1; i++) {

                    console.log(blank4[i], numberAR[blank4[i]]);

                    emptyString += numberAR[blank4[i]];
                }
                console.log("3");
                console.log(emptyString);
                for (var i = 0; i < blank3.length && SmInt == 1; i++) {
                    console.log(blank3[i], symbolAR[blank3[i]]);
                    emptyString += symbolAR[blank3[i]];
                }
                console.log("4");
                console.log(emptyString);
                var s = shuffle(emptyString);
                s = shuffle(s);
                var pass = "";
                for (var i = 0; i < PassLenINT; i++) {
                    pass += s[i];
                }

                document.getElementById("ShowPassword").value = pass;
                document.getElementById("Symbolyes").checked = false;
                document.getElementById("Symbolno").checked = false;

           
            }
        })


        const copyButton = document.getElementById("copypass");
        copyButton.addEventListener("click", function () {
            const copied = document.getElementById("ShowPassword").value;
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = copied;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);

        })

   

        const clearButton = document.getElementById("clearall");
        clearButton.addEventListener("click", function () {

            document.getElementById("ShowPassword").value = "";
            document.getElementById("Symbolyes").checked = false;
            document.getElementById("Symbolno").checked = false;
            document.getElementById("Numbersyes").checked = false;
            document.getElementById("Numbersno").checked = false;
            document.getElementById("ExcludeSimilarCharyes").checked = false;
            document.getElementById("ExcludeSimilarCharno").checked = false;
            document.getElementById("Lowercaseyes").checked = false;
            document.getElementById("Lowercasesno").checked = false;
            document.getElementById("Uppercaseyes").checked = false;
            document.getElementById("Uppercasesno").checked = false;
            document.getElementById("length").value = "6";

        })


        function flag(check) {
            if (check.toUpperCase() == "YES")
                return 1;
            else
                return 0;
        }
        function ran(vari) {
            var dice = Math.random() * vari;
            var x = Math.round(dice);
            return x;
        }
        function shuffle(s) {
            var arr = s.split('');

            arr.sort(function () {
                return 0.5 - Math.random();
            });
            s = arr.join('');
            return s;
        }