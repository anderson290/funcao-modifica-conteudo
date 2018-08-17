function modifica() {

          //recebendo conteudo do combobox
          var s = document.formDados.opcoes.options[document.formDados.opcoes.selectedIndex].text;

          //selecionando o textarea para colocar o conteúdo
          var box = document.querySelector('textarea');
          if (s == "Opcao1") {

                 box.value="Conteúdo01";

          } else if(s=="Opcao2"){

                  box.value="Conteúdo02";

          }else if(s=="Opcao3"){

                  box.value="Conteúdo03";

          }else if(s=="Opcao4"){

                  box.value="Conteúdo04";

          }else{
                  box.value="Conteúdo05";
          
          }

        }