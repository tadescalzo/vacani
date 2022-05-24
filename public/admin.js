const firebaseConfig = {
  apiKey: "AIzaSyBh9sET5AqFOtq-pVbD3zih_M3-88IZenc",
  authDomain: "vacani-props.firebaseapp.com",
  projectId: "vacani-props",
  storageBucket: "vacani-props.appspot.com",
  messagingSenderId: "280501608482",
  appId: "1:280501608482:web:805b732642b7b0656f2a7b",
  measurementId: "G-44KFFXT7VP",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var storage = firebase.storage();
let modal = document.querySelector(".modal");
let body = document.querySelector("#body");
let main = document.querySelector(".main");
let header = document.querySelector(".header");
let menu = document.querySelector(".main--admin__menu");
let login = document.querySelector(".main--admin__login");
let container = document.querySelector(".main--container");
let mainBtn = document.querySelector(".header--form__btn");
let cityFilter = document.querySelector("#barCity");
let typeFilter = document.querySelector("#barType");
let propFilter = document.querySelector("#barProp");
let navHome = document.querySelectorAll(".navHome");
let navBuy = document.querySelector(".navBuy");
let navAlq = document.querySelector(".navAlq");
let navSell = document.querySelectorAll(".navSell");
let navFaq = document.querySelectorAll(".navFaq");
let navCont = document.querySelectorAll(".navCont");
let closeMobile = document.querySelector(".navbar--mobile__close");
let menuMobile = document.querySelector(".navbar--mobile__menu");
let openMobile = document.querySelector(".navbar--mobile");
let mainTitle = document.querySelector(".main--title");
let loginBtn = document.querySelector("#login");
let loginUser = document.querySelector("#user");
let loginPass = document.querySelector("#password");
let openUpload = document.querySelector(".openUpload");
let openList = document.querySelector(".openList");
let uploadModal = document.querySelector(".main--admin__upload");
let submitEdit1 = document.querySelector("#submitEdit1");
let submitEdit2 = document.querySelector("#submitEdit2");
let submitEdit3 = document.querySelector("#submitEdit3");
let submitEdit4 = document.querySelector("#submitEdit4");
let formUnoEdit = document.querySelector("#formUnoEdit");
let formDosEdit = document.querySelector("#formDosEdit");
let formTresEdit = document.querySelector("#formTresEdit");
let formCuatroEdit = document.querySelector("#formCuatroEdit");
let editTitle = document.querySelector("#editTitle");
let editDir = document.querySelector("#editDir");
let editLocate = document.querySelector("#editLocate");
let editType = document.querySelector("#editType");
let editPrice = document.querySelector("#editPrice");
let editExp = document.querySelector("#editExp");
let editMets = document.querySelector("#editMets");
let editUsedmets = document.querySelector("#editUsedmets");
let editRooms = document.querySelector("#editRooms");
let editBaths = document.querySelector("#editBaths");
let editCar = document.querySelector("#editCar");
let editAge = document.querySelector("#editAge");
let editDesc = document.querySelector("#editDesc");
let editLat = document.querySelector("#editLat");
let editLong = document.querySelector("#editLong");
let editPhoto = document.querySelector("#editPhoto");
let editProp = document.querySelector("#editProp");
let addDescEdit = document.querySelector("#addDescEdit");
let addPhotoEdit = document.querySelector("#addPhotoEdit");
let showDescEdit = document.querySelector("#showDescEdit");
let submitForm1 = document.querySelector("#submitForm1");
let submitForm2 = document.querySelector("#submitForm2");
let submitForm3 = document.querySelector("#submitForm3");
let submitForm4 = document.querySelector("#submitForm4");
let formUno = document.querySelector("#formUno");
let formDos = document.querySelector("#formDos");
let formTres = document.querySelector("#formTres");
let formCuatro = document.querySelector("#formCuatro");
let itemTitle = document.querySelector("#itemTitle");
let itemDir = document.querySelector("#itemDir");
let itemLocate = document.querySelector("#itemLocate");
let itemType = document.querySelector("#itemType");
let itemPrice = document.querySelector("#itemPrice");
let itemExp = document.querySelector("#itemExp");
let itemMets = document.querySelector("#itemMets");
let itemUsedmets = document.querySelector("#itemUsedmets");
let itemRooms = document.querySelector("#itemRooms");
let itemBaths = document.querySelector("#itemBaths");
let itemCar = document.querySelector("#itemCar");
let itemAge = document.querySelector("#itemAge");
let itemDesc = document.querySelector("#itemDesc");
let itemLat = document.querySelector("#itemLat");
let itemLong = document.querySelector("#itemLong");
let itemPhoto = document.querySelector("#itemPhoto");
let itemProp = document.querySelector("#itemProp");
let checkNet = document.querySelector("#checkNet");
let checkElec = document.querySelector("#checkElec");
let checkGas = document.querySelector("#checkGas");
let checkPav = document.querySelector("#checkPav");
let checkAgu = document.querySelector("#checkAgu");
let checkMej = document.querySelector("#checkMej");
let checkTierra = document.querySelector("#checkTierra");
let editNet = document.querySelector("#editNet");
let editElec = document.querySelector("#editElec");
let editGas = document.querySelector("#editGas");
let editPav = document.querySelector("#editPav");
let editAgu = document.querySelector("#editAgu");
let editMej = document.querySelector("#editMej");
let editTierra = document.querySelector("#editTierra");
let addDesc = document.querySelector("#addDesc");
let addPhoto = document.querySelector("#addPhoto");
let showDesc = document.querySelector("#showDesc");
let modalList = document.querySelector(".main--admin__list");
let modalEdit = document.querySelector(".main--admin__edit");
let adminList = document.querySelector(".adminList");
let closeList = document.querySelector(".closeList");
let closeEdit = document.querySelector("#closeEdit");
let closeUpload = document.querySelector("#closeUpload");
let descTest = "";
let descTestEdit = "";
const global = db.collection("global");
const contador = db.collection("info").doc("contador");

/*ABRIR LISTA*/
openList.addEventListener("click", () => {
  menu.style.opacity = 0;
  modalList.style.opacity = 1;
  setTimeout(() => {
    adminList.innerHTML = "";
    menu.style.display = "none";
    modalList.style.display = "flex";
    global.get().then((querySnapshot) => {
      querySnapshot.forEach((item) => {
        let prop = item.data();
        let uniqueId = item.id;
        const {
          id,
          baths,
          city,
          desc,
          dir,
          exp,
          garage,
          lat,
          long,
          mets,
          old,
          price,
          mode,
          rooms,
          services,
          title,
          type,
          usedMets,
        } = prop;
        adminList.innerHTML += `<li class="listItem" data-id="${uniqueId}">
          <h4 class="listId">ID: ${id}</h4>
          <h3 class="listTitle">Propiedad: ${dir}</h3>
          <h3 class="listType">${type}</h3>
          <h3 class="listPrice">Precio: ${price}</h3>
          <button class="editList">Editar</button>
          <button class="deleteList">Eliminar</button>
          </li>`;
        /*BORRAR ITEM*/
        let borrado = document.querySelectorAll(".deleteList");
        for (boton of borrado) {
          boton.addEventListener("click", (e) => {
            let child = e.target;
            let parent = child.parentElement;
            let dataId = parent.getAttribute("data-id");
            global
              .doc(dataId)
              .delete()
              .then(() => {
                location.reload();
              })
              .catch((error) => {
                console.error("Error removing document: ", error);
              });
          });
        }
        /*EDITAR ITEM*/
        let editados = document.querySelectorAll(".editList");
        for (edit of editados) {
          edit.addEventListener("click", (e) => {
            let child = e.target;
            let parent = child.parentElement;
            let dataId = parent.getAttribute("data-id");
            var propsRef = db.collection("global").doc(dataId);
            propsRef.get().then((doc) => {
              let prop = doc.data();
              const {
                id,
                baths,
                city,
                desc,
                dir,
                exp,
                garage,
                lat,
                long,
                mets,
                old,
                price,
                propCat,
                rooms,
                services,
                title,
                type,
                usedMets,
              } = prop;
              modalList.style.opacity = 0;
              modalEdit.style.display = "flex";
              formUnoEdit.style.opacity = 1;
              formUno.style.display = "flex";
              setTimeout(() => {
                editTitle.value = title;
                editLocate.value = city;
                editDir.value = dir;
                editType.value = type;
                editPrice.value = price;
                editExp.value = exp;
                editMets.value = mets;
                editUsedmets.value = usedMets;
                editRooms.value = rooms;
                editBaths.value = baths;
                editCar.value = garage;
                editAge.value = old;
                showDescEdit.innerHTML = desc;
                descTestEdit = desc;
                editProp.value = propCat;
                modalList.style.display = "none";
                modalEdit.style.opacity = 1;
                formUnoEdit.style.opacity = 1;
              }, 500);
              /*FIRST CONFIRM EDIT*/
              submitEdit1.addEventListener("click", () => {
                formUnoEdit.style.opacity = 0;
                formDosEdit.style.opacity = 1;
                setTimeout(() => {
                  formUnoEdit.style.display = "none";
                  formDosEdit.style.display = "flex";
                  let deleteDesc = document.querySelectorAll(".deleteDesc");
                  /*DELETE DESC*/
                  deleteDesc.forEach((delBtn) => {
                    delBtn.addEventListener("click", (e) => {
                      e.preventDefault();
                      let parentDel = delBtn.parentNode;
                      parentDel.parentNode.removeChild(parentDel);
                      let htmlDescEdit = showDescEdit.innerHTML;
                      descTestEdit = htmlDescEdit;
                    });
                  });
                  /*ADD DESC*/
                  addDescEdit.addEventListener("click", () => {
                    let descResult = editDesc.value;
                    showDescEdit.innerHTML = "";
                    descTestEdit += `<li class="itemDesc"><span>${descResult}</span><input type='button' value='Eliminar' class="deleteDesc" /></li>`;
                    showDescEdit.innerHTML = descTestEdit;
                    editDesc.value = "";
                    deleteDesc = document.querySelectorAll(".deleteDesc");
                    deleteDesc.forEach((delBtn) => {
                      delBtn.addEventListener("click", (e) => {
                        e.preventDefault();
                        let parentDel = delBtn.parentNode;
                        parentDel.parentNode.removeChild(parentDel);
                        let htmlDescEdit = showDescEdit.innerHTML;
                        descTestEdit = htmlDescEdit;
                      });
                    });
                  });
                }, 500);
              });
              /*SECOND CONFIRM EDIT*/
              submitEdit2.addEventListener("click", () => {
                formDosEdit.style.opacity = 0;
                formTresEdit.style.opacity = 1;
                setTimeout(() => {
                  formDosEdit.style.display = "none";
                  formTresEdit.style.display = "flex";
                }, 500);
              });
              /*THIRD CONFIRM EDIT*/
              submitEdit3.addEventListener("click", () => {
                formTresEdit.style.opacity = 0;
                formCuatroEdit.style.opacity = 1;
                setTimeout(() => {
                  formTresEdit.style.display = "none";
                  formCuatroEdit.style.display = "flex";
                }, 500);
              });
              /*FOURTH CONFIRM UPLOAD*/
              submitEdit4.addEventListener("click", () => {
                formCuatroEdit.style.opacity = 0;
                /*ADD ITEMS TO DB*/
                let title = editTitle.value;
                let city = editLocate.value;
                let dir = editDir.value;
                let type = editType.value;
                let price = editPrice.value;
                let exp = editExp.value;
                let mets = editMets.value;
                let usedMets = editUsedmets.value;
                let rooms = editRooms.value;
                let baths = editBaths.value;
                let garage = editCar.value;
                let age = editAge.value;
                let desc = descTestEdit;
                let propCat = editProp.value;
                let net = "";
                let elec = "";
                let gas = "";
                let pav = "";
                let agua = "";
                let mej = "";
                let tierra = "";
                editNet.checked ? (net = true) : (net = false);
                editElec.checked ? (elec = true) : (elec = false);
                editGas.checked ? (gas = true) : (gas = false);
                editPav.checked ? (pav = true) : (pav = false);
                editAgu.checked ? (agua = true) : (agua = false);
                editMej.checked ? (mej = true) : (mej = false);
                editTierra.checked ? (tierra = true) : (tierra = false);
                propsRef
                  .update({
                    title: title,
                    price: price,
                    exp: exp,
                    mets: mets,
                    usedMets: usedMets,
                    rooms: rooms,
                    garage: garage,
                    old: age,
                    baths: baths,
                    city: city,
                    type: type,
                    propCat: propCat,
                    desc: desc,
                    services: {
                      Internet: net,
                      Electricidad: elec,
                      Gas: gas,
                      Pavimento: pav,
                      Agua: agua,
                      Mejorado: mej,
                      Tierra: tierra,
                    },
                    dir: dir,
                  })
                  .then((docRef) => {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Item actualizado",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  })
                  .catch((error) => {
                    console.error("Error adding document: ", error);
                  });

                editTitle.value = "";
                editLocate.value = "";
                editType.value = "";
                editPrice.value = "";
                editExp.value = "";
                editMets.value = "";
                editUsedmets.value = "";
                editRooms.value = "";
                editCar.value = "";
                editAge.value = "";
                editDesc.value = "";
                setTimeout(() => {
                  formCuatroEdit.style.display = "none";
                  modalEdit.style.display = "none";
                  menu.style.display = "flex";
                  menu.style.opacity = 1;
                }, 500);
              });
            });
          });
        }
      });
    });
  }, 500);
});
/*CERRAR LISTA*/
closeList.addEventListener("click", () => {
  modalList.style.opacity = 0;
  menu.style.display = "flex";
  setTimeout(() => {
    adminList.innerHTML = "";
    modalList.style.display = "none";
    menu.style.opacity = 1;
  }, 500);
});

closeEdit.addEventListener("click", () => {
  modalEdit.style.opacity = 0;
  menu.style.display = "flex";
  setTimeout(() => {
    modalEdit.style.display = "none";
    menu.style.opacity = 1;
  }, 500);
});
closeUpload.addEventListener("click", () => {
  uploadModal.style.opacity = 0;
  menu.style.display = "flex";
  setTimeout(() => {
    formUno.style.display = "flex";
    formUno.style.opacity = 1;
    formDos.style.display = "none";
    formDos.style.opacity = 0;
    formTres.style.display = "none";
    formTres.style.opacity = 0;
    formCuatro.style.display = "none";
    formCuatro.style.opacity = 0;
    uploadModal.style.display = "none";
    menu.style.opacity = 1;
    itemTitle.value = "";
    itemLocate.value = "";
    itemPrice.value = "";
    itemExp.value = "";
    itemMets.value = "";
    itemUsedmets.value = "";
    itemRooms.value = "";
    itemCar.value = "";
    itemAge.value = "";
    itemDesc.value = "";
  }, 500);
});

/*LOGIN*/
loginBtn.addEventListener("click", () => {
  let email = loginUser.value;
  let password = loginPass.value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
});

/*FUNCION MAIN*/
contador.get().then((doc) => {
  let id = doc.data();
  /*OPEN UPLOAD MODAL*/
  openUpload.addEventListener("click", () => {
    menu.style.opacity = 0;
    uploadModal.style.opacity = 1;
    setTimeout(() => {
      menu.style.display = "none";
      formUno.style.opacity = 1;
      uploadModal.style.display = "flex";
    }, 500);
  });

  /*FIRST CONFIRM UPLOAD*/
  submitForm1.addEventListener("click", () => {
    formUno.style.opacity = 0;
    formDos.style.opacity = 1;
    setTimeout(() => {
      formUno.style.display = "none";
      formDos.style.display = "flex";
      let deleteDesc = document.querySelectorAll(".deleteDesc");
      /*DELETE DESC*/
      deleteDesc.forEach((delBtn) => {
        delBtn.addEventListener("click", (e) => {
          e.preventDefault();
          let parentDel = delBtn.parentNode;
          parentDel.parentNode.removeChild(parentDel);
          let htmlDesc = showDesc.innerHTML;
          descTest = htmlDesc;
        });
      });
    }, 500);
  });
  /*SECOND CONFIRM UPLOAD*/
  submitForm2.addEventListener("click", () => {
    formDos.style.opacity = 0;
    formTres.style.opacity = 1;
    setTimeout(() => {
      formDos.style.display = "none";
      formTres.style.display = "flex";
    }, 500);
  });

  /*THIRD CONFIRM UPLOAD*/
  submitForm3.addEventListener("click", () => {
    formTres.style.opacity = 0;
    formCuatro.style.opacity = 1;
    setTimeout(() => {
      formTres.style.display = "none";
      formCuatro.style.display = "flex";
    }, 500);
  });

  /*ADD DESC*/
  addDesc.addEventListener("click", () => {
    let descResult = itemDesc.value;
    showDesc.innerHTML = "";
    descTest += `<li class="itemDesc"><span>${descResult}</span><input type='button' value='Eliminar' class="deleteDesc" /></li>`;
    showDesc.innerHTML = descTest;
    itemDesc.value = "";
    deleteDesc = document.querySelectorAll(".deleteDesc");

    /*DELETE DESC*/
    deleteDesc.forEach((delBtn) => {
      delBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let parentDel = delBtn.parentNode;
        parentDel.parentNode.removeChild(parentDel);
        let htmlDesc = showDesc.innerHTML;
        descTest = htmlDesc;
      });
    });
  });

  /*SUBIR FOTO*/
  itemPhoto.addEventListener("change", (e) => {
    let file = {};
    file = e.target.files[0];
    // 'file' comes from the Blob or File API
    addPhoto.addEventListener("click", () => {
      let testImg = document.querySelector("#testImg");
      let ref = storage.ref(id.id + "/" + file.name + ".jpg");
      ref.put(file).then((snapshot) => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Foto cargada",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    });
  });

  /*FOURTH CONFIRM UPLOAD*/
  submitForm4.addEventListener("click", () => {
    formCuatro.style.opacity = 0;
    /*ADD ITEMS TO DB*/
    let title = itemTitle.value;
    let city = itemLocate.value;
    let dir = itemDir.value;
    let type = itemType.value;
    let price = itemPrice.value;
    let exp = itemExp.value;
    let mets = itemMets.value;
    let usedMets = itemUsedmets.value;
    let rooms = itemRooms.value;
    let baths = itemBaths.value;
    let garage = itemCar.value;
    let age = itemAge.value;
    let desc = descTest;
    let propCat = itemProp.value;
    let idFinal = id.id;
    let net = "";
    let elec = "";
    let gas = "";
    let pav = "";
    let agua = "";
    let mej = "";
    let tierra = "";
    checkNet.checked ? (net = true) : (net = false);
    checkElec.checked ? (elec = true) : (elec = false);
    checkGas.checked ? (gas = true) : (gas = false);
    checkPav.checked ? (pav = true) : (pav = false);
    checkAgu.checked ? (agua = true) : (agua = false);
    checkMej.checked ? (mej = true) : (mej = false);
    checkTierra.checked ? (tierra = true) : (tierra = false);

    db.collection("global")
      .add({
        title: title,
        price: price,
        exp: exp,
        mets: mets,
        usedMets: usedMets,
        rooms: rooms,
        garage: garage,
        old: age,
        id: idFinal,
        baths: baths,
        city: city,
        type: type,
        propCat: propCat,
        desc: desc,
        services: {
          Internet: net,
          Electricidad: elec,
          Gas: gas,
          Pavimento: pav,
          Agua: agua,
          Mejorado: mej,
          Tierra: tierra,
        },
        dir: dir,
      })
      .then((docRef) => {
        let data = docRef;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item cargado",
          showConfirmButton: false,
          timer: 1500,
        });
        idFinal++;
        contador
          .update({
            id: idFinal,
          })
          .then(() => {});
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    itemTitle.value = "";
    itemLocate.value = "";
    itemType.value = "";
    itemPrice.value = "";
    itemExp.value = "";
    itemMets.value = "";
    itemUsedmets.value = "";
    itemRooms.value = "";
    itemCar.value = "";
    itemAge.value = "";
    itemDesc.value = "";
    setTimeout(() => {
      formCuatro.style.display = "none";
      uploadModal.style.display = "none";
      menu.style.display = "flex";
      menu.style.opacity = 1;
    }, 500);
  });
});

/*IF ADMIN IS LOGGED ON*/
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    login.style.display = "none";
    menu.style.display = "flex";
  } else {
    // User is signed out
    // ...
  }
});
