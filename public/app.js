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
let navBuy = document.querySelectorAll(".navBuy");
let navAlq = document.querySelectorAll(".navAlq");
let navSell = document.querySelectorAll(".navSell");
let navFaq = document.querySelectorAll(".navFaq");
let navCont = document.querySelectorAll(".navCont");
let closeMobile = document.querySelector(".navbar--mobile__close");
let menuMobile = document.querySelector(".navbar--mobile__menu");
let openMobile = document.querySelector(".navbar--mobile");
let loginBtn = document.querySelector("#login");
let loginUser = document.querySelector("#user");
let loginPass = document.querySelector("#password");
let openUpload = document.querySelector(".openUpload");
let openList = document.querySelector(".openList");
let uploadModal = document.querySelector(".main--admin__upload");
let submitEdit1 = document.querySelector("#submitEdit1");
let submitEdit2 = document.querySelector("#submitEdit2");
let submitEdit3 = document.querySelector("#submitEdit3");
let formUnoEdit = document.querySelector("#formUnoEdit");
let formDosEdit = document.querySelector("#formDosEdit");
let formTresEdit = document.querySelector("#formTresEdit");
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
let formUno = document.querySelector("#formUno");
let formDos = document.querySelector("#formDos");
let formTres = document.querySelector("#formTres");
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
let addDesc = document.querySelector("#addDesc");
let addPhoto = document.querySelector("#addPhoto");
let showDesc = document.querySelector("#showDesc");
let modalList = document.querySelector(".main--admin__list");
let modalEdit = document.querySelector(".main--admin__edit");
let adminList = document.querySelector(".adminList");
let closeList = document.querySelector(".closeList");
let deletePhoto = document.querySelector("#deletePhoto");
let mainTitle = document.querySelector(".main--title");
let submitTextCont = document.querySelector("#submitTextCont");
let submitPhoneCont = document.querySelector("#submitPhoneCont");
let submitNameCont = document.querySelector("#submitNameCont");
let submitMailCont = document.querySelector("#submitMailCont");
let faq = document.querySelector(".faq");
let cont = document.querySelector(".cont");
submitBtnCont = document.querySelector("#submitBtnCont");
let descTest = "";
let descTestEdit = "";
const global = db.collection("global");
const contador = db.collection("info").doc("contador");

/*FUNCION CARGAR SERVICIOS DENTRO DEL MODAL*/
const loadInfo = (
  services,
  desc,
  id,
  baths,
  city,
  dir,
  exp,
  garage,
  dispo,
  piso,
  ori,
  mets,
  old,
  price,
  rooms,
  title,
  type,
  usedMets,
  propCat
) => {
  let propInfo = document.querySelector("#propInfo");
  let checkboxes = document.querySelector(".modalInfoCheck");
  let modalInfoDesc = document.querySelector(".modalInfoDesc");
  let submitBtn = document.querySelector("#submitBtn");
  let submitMail = document.querySelector("#submitMail");
  let submitName = document.querySelector("#submitName");
  let submitPhone = document.querySelector("#submitPhone");
  let submitText = document.querySelector("#submitText");
  checkboxes.innerHTML = " ";
  for (service in services) {
    if (services[service] == true) {
      checkboxes.innerHTML += `<li><i class="fa-solid fa-square-check"></i>${service}</li>`;
    }
  }
  modalInfoDesc.innerHTML = desc;
  if (propCat == "Departamento") {
    propInfo.innerHTML = `<p><i class="fa-solid fa-vector-square"></i> Metros totales: <strong>${mets}</strong></p>
  <p><i class="fa-solid fa-vector-square"></i> Metros Cubiertos: <strong>${usedMets}</strong></p>
  <p><i class="fa-solid fa-house"></i> Ambientes: <strong>${rooms}</strong></p>
  <p><i class="fa-solid fa-car"></i> Cochera: <strong>${garage}</strong></p>
  <p><i class="fa-solid fa-calendar-days"></i> Antiguedad:<br><strong>${old}</strong></p>
  <p><i class="fa-solid fa-bath"></i> Ambientes: <strong>${baths}</strong></p>
  <p><i class="fa-solid fa-money-bill-1-wave"></i> Valor: <strong>${price}</strong></p>
  <p><i class="fa-solid fa-compass"></i> Disposicion: <strong>${dispo}</strong></p>
  <p><i class="fa-solid fa-building"></i> Piso: <strong>${piso}</strong></p>
  <p><i class="fa-solid fa-compass"></i> Orientacion: <strong>${ori}</strong></p>`;
  } else {
    propInfo.innerHTML = `<p><i class="fa-solid fa-vector-square"></i> Metros totales: <strong>${mets}</strong></p>
    <p><i class="fa-solid fa-vector-square"></i> Metros Cubiertos: <strong>${usedMets}</strong></p>
    <p><i class="fa-solid fa-house"></i> Ambientes: <strong>${rooms}</strong></p>
    <p><i class="fa-solid fa-car"></i> Cochera: <strong>${garage}</strong></p>
    <p><i class="fa-solid fa-calendar-days"></i> Antiguedad:<br><strong>${old}</strong></p>
    <p><i class="fa-solid fa-bath"></i> Ambientes: <strong>${baths}</strong></p>
    <p><i class="fa-solid fa-money-bill-1-wave"></i> Valor: <strong>${price}</strong></p>`;
  }
  submitBtn.addEventListener("click", () => {
    let name = submitName.value;
    let mail = submitMail.value;
    let phone = submitPhone.value;
    let message = submitText.value;
    emailjs.send("service_rzf65th", "template_64qcnn6", {
      from_name: name,
      message: `Telefono: ${phone}, Mail: ${mail},Consulta: ${message}, en la publicacion: ${dir},${city}`,
    });
    setTimeout(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Consulta enviada",
        showConfirmButton: false,
        timer: 1500,
      });
      submitMail.value = "";
      submitPhone.value = "";
      submitText.value = "";
      submitName.value = "";
    }, 1000);
  });
};

const loadImgs = (id, uniqueId) => {
  let carousel = document.getElementById(id);
  let indicators = document.getElementById(uniqueId);
  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

  // Create a storage reference from our storage service
  var storageRef = storage.ref();
  var listRef = storageRef.child(`${id}`);
  let contador = 0;
  // Find all the prefixes and items.
  listRef
    .listAll()
    .then((res) => {
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        let path = itemRef.fullPath;
        storageRef
          .child(path)
          .getDownloadURL()
          .then((url) => {
            if (contador == 0) {
              carousel.innerHTML += `<div class="carousel-item active">
              <img
              loading="lazy"
                src= ${url}
                class="d-block w-100"
                alt="..."
              />
              </div>`;
              indicators.innerHTML += `<button type="button" data-bs-target="#carousel${id}" data-bs-slide-to="${contador}" class="active" aria-current="true" aria-label="Slide ${
                contador + 1
              }"></button>`;
            } else {
              carousel.innerHTML += `<div class="carousel-item">
                    <img
                      src= ${url}
                      class="d-block w-100"
                      alt="..."
                    />
                    </div>`;
              indicators.innerHTML += `<button type="button" data-bs-target="#carousel${id}" data-bs-slide-to="${contador}" aria-label="Slide ${
                contador + 1
              }"></button>`;
            }
            contador++;
          })
          .catch((error) => {
            // Handle any errors
          });
      });
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
    });
};

/*FUNCION ABRIR MODAL POR ITEM*/
const clickFunction = (container, mainTitle) => {
  /*UNA VEZ QUE SE CUMPLE CON LA PETICION DE DATOS CARGAMOS LA FUNCION DE MODAL ON CLICK*/
  let cards = document.querySelectorAll(".card");
  let modal = document.querySelector(".modal");
  for (card of cards) {
    card.addEventListener("click", (e) => {
      let child = e.target;
      let parent = child.parentElement;
      console.log(child.className);
      /*SI TOCAMOS LA CARD Y NO ES UNO NI OTRO SE ABRE EL MODAL*/
      if (
        child.className == "card--bottom" ||
        child.className == "carousel-inner"
      ) {
        container.style.opacity = 0;
        mainTitle.style.opacity = 0;
        let dataId = parent.getAttribute("data-item");
        let reference = db.collection("global").doc(dataId);
        reference.get().then((doc) => {
          let queryResult = doc.data();
          modal.style.display = "flex";
          modal.style.opacity = 1;
          modal.innerHTML = `<div class="lds-ripple"><div></div><div></div></div>`;
          header.style.opacity = 0;
          document.documentElement.scrollTop = 0;
          let uniqueId = doc.id;
          const {
            id,
            baths,
            city,
            desc,
            dir,
            exp,
            garage,
            dispo,
            piso,
            ori,
            mets,
            old,
            price,
            rooms,
            services,
            title,
            type,
            usedMets,
            propCat,
          } = queryResult;
          let wppTxt = title.split(" ").join("+");
          wppTxt += `+${dir}`;
          /*CARGAMOS LA PANTALLA DEL ITEM SELECCIONADO*/
          setTimeout(() => {
            modal.innerHTML = `<span class="modal--close">X</span>
          
              <div class='modal--upper'>
              <div class='modal--upper__header'>
                  <div class='upperLeft'>
                  <h2 class="modalTitle">
                    ${title}
                  </h2>
                  <h5><i class="fa-solid fa-location-dot"></i> ${dir}, ${city}</h5>
                  </div>
                  <div class='upperRight'>
                  <div class='column'>
                  <span class="totalPrice">${price}</span>
                  ${
                    exp != 0
                      ? `<span class="card--bottom__exp">+${exp}</span>`
                      : `<span class="card--bottom__exp">Sin Expensas</span>`
                  }
                  </div>
                  <p class='modalInfoType'><strong>${type}</strong></p>
                  </div> 
              </div>
                <div class="modal--upper__imgs">
                  <div id="carousel${id}" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators" id='${uniqueId}'>
            </div>
                    <div class="carousel-inner" id='${id}'>
                      
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carousel${id}"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carousel${id}"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                </div>
                <div class='modal--lower'>
                <div class="modal--lower__info">
                  <div class="modalInfo">
                    <span>INFORMACION DE LA PROPIEDAD</span>
                    <hr class="modalInfoLine" />
                    <div class="modalInfoInd" id='propInfo'>
                      
                    </div>
                  </div>
                  <div class="modalInfo">
                    <span>DESCRIPCION DE LA PROPIEDAD</span>
                    <hr class="modalInfoLine" />
                    <ul class="modalInfoDesc">
    
                    </ul>
                  </div>
                  <div class="modalInfo">
                    <span>AMENITIES & SERVICIOS</span>
                    <hr class="modalInfoLine" />
                    <ul class="modalInfoCheck">
                    </ul>
                  </div>
                </div>
                <form action="submit">
                    <h3>Consulta por esta propiedad</h3>
                    <label for="submitName">Nombre y apellido:</label>
                    <input type="text" id="submitName" />
                    <label for="submitMail">Mail de contacto:</label>
                    <input type="email" id="submitMail" />
                    <label for="submitPhone">Telefono de contacto:</label>
                    <input type="text" id="submitPhone" />
                    <label for='submitText'>Consulta:</label>
                    <input type='text' id='submitText'>
                    <input
                      type="button"
                      value="Enviar Consulta"
                      id="submitBtn"
                    />
                    <a
                      href="https://api.whatsapp.com/send/?phone=5491130105048&text=Me+interesa+${wppTxt}"
                      id="wppBtn"
                      target="_blank"
                      >Enviar Whatsapp</a
                    >
                    <img src="images/logoNav.svg" alt="" />
                  </form>
                  </div>`;
          }, 500);
          container.style.display = "none";
          mainTitle.style.display = "none";
          header.style.display = "none";
          setTimeout(() => {
            /*FUNCION CERRAR MODAL*/
            let closeModal = document.querySelector(".modal--close");
            closeModal.addEventListener("click", () => {
              modal.style.opacity = 0;
              container.style.display = "flex";
              mainTitle.style.display = "flex";
              header.style.display = "flex";
              setTimeout(() => {
                modal.style.display = "none";
                container.style.opacity = 1;
                mainTitle.style.opacity = 1;
                header.style.opacity = 1;
                modal.innerHTML = "";
              }, 500);
            });
            loadInfo(
              services,
              desc,
              id,
              baths,
              city,
              dir,
              exp,
              garage,
              dispo,
              piso,
              ori,
              mets,
              old,
              price,
              rooms,
              title,
              type,
              usedMets,
              propCat
            );
            loadImgs(id, uniqueId);
          }, 600);
        });
      }
    });
  }
};

/*ABRIR MENU MOBILE*/
openMobile.addEventListener("click", () => {
  menuMobile.style.display = "flex";
  closeMobile.style.display = "flex";
  setTimeout(() => {
    menuMobile.style.opacity = 1;
    closeMobile.style.opacity = 1;
  }, 300);
});

/*CERRAR MENU MOBILE*/
closeMobile.addEventListener("click", () => {
  menuMobile.style.opacity = 0;
  closeMobile.style.opacity = 0;

  setTimeout(() => {
    menuMobile.style.display = "none";
    closeMobile.style.display = "none";
  }, 300);
});

/*FILTRO ALQUILAR*/
for (btns of navAlq) {
  btns.addEventListener("click", (e) => {
    global
      .where("type", "==", "Alquiler")
      .get()
      .then((querySnapshot) => {
        menuMobile.style.opacity = 0;
        closeMobile.style.opacity = 0;
        faq.style.opacity = 0;
        main.style.display = "flex";
        header.style.display = "flex";

        setTimeout(() => {
          main.style.opacity = 1;
          header.style.opacity = 1;
          faq.style.display = "none";
          menuMobile.style.display = "none";
          closeMobile.style.display = "none";
        }, 300);
        scroll({
          top: 320,
          behavior: "smooth",
        });
        main.innerHTML = `<div class="modal"></div><h2 class="main--title">Alquilar</h2><div class="main--container"></div>`;
        setTimeout(() => {
          let container = document.querySelector(".main--container");
          let mainTitle = document.querySelector(".main--title");
          querySnapshot.forEach((item) => {
            /*CARGA EN PANTALLA DE RESULTADOS DEL FILTRO*/
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
            container.innerHTML += `<article class="card" data-item=${uniqueId}>
            <div class="card--top">
              <div id="carousel${id}" data-item=${uniqueId} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
              <div class="carousel-indicators" id='${uniqueId}'>
              </div>
              <div class="carousel-inner" id='${id}'>
                  
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel${id}"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel${id}"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="card--bottom">
              <p class="card--bottom__type">
              ${type}
              </p>
              <p class="card--bottom__desc">
                ${title}
              </p>
              <span class="card--bottom__price">${price}</span>
              ${
                exp != 0
                  ? `<span class="card--bottom__exp">+${exp}</span>`
                  : `<span class="card--bottom__exp">Sin Expensas</span>`
              }
              <div class="card--bottom__line"></div>
              <div class="card--bottom__info">
                <p><strong>${mets}</strong> m² totales</p>
                <p><strong>${baths}</strong> baños</p>
                <p><strong>${usedMets}</strong> m² cubiertos</p>
                <p><strong>${rooms}</strong> ambientes</p>
              </div>
            </div>
          </article>`;
            /*FUNCION CLICK*/
            clickFunction(container, mainTitle);
            setTimeout(() => {
              loadImgs(id, uniqueId);
            }, 500);
          }, 500);
        }, 600);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        container.innerHTML = `<p>No hay resultados para tu busqueda</p>`;
      });
  });
}

/*FILTRO COMPRA*/
for (btns of navBuy) {
  btns.addEventListener("click", (e) => {
    global
      .where("type", "==", "Venta")
      .get()
      .then((querySnapshot) => {
        e.preventDefault();
        menuMobile.style.opacity = 0;
        closeMobile.style.opacity = 0;
        faq.style.opacity = 0;
        main.style.display = "flex";
        header.style.display = "flex";

        setTimeout(() => {
          main.style.opacity = 1;
          header.style.opacity = 1;
          faq.style.display = "none";
          menuMobile.style.display = "none";
          closeMobile.style.display = "none";
        }, 300);
        scroll({
          top: 320,
          behavior: "smooth",
        });
        main.innerHTML = `<div class="modal"></div><h2 class="main--title">Venta</h2><div class="main--container"></div>`;
        setTimeout(() => {
          let container = document.querySelector(".main--container");
          let mainTitle = document.querySelector(".main--title");
          querySnapshot.forEach((item) => {
            /*CARGA EN PANTALLA DE RESULTADOS DEL FILTRO*/
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
            container.innerHTML += `<article class="card" data-item=${uniqueId}>
            <div class="card--top">
              <div id="carousel${id}" data-item=${uniqueId} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
              <div class="carousel-indicators" id='${uniqueId}'>
              </div>
              <div class="carousel-inner" id='${id}'>
                  
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel${id}"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel${id}"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="card--bottom">
              <p class="card--bottom__type">
              ${type}
              </p>
              <p class="card--bottom__desc">
                ${title}
              </p>
              <span class="card--bottom__price">${price}</span>
              ${
                exp != 0
                  ? `<span class="card--bottom__exp">+${exp}</span>`
                  : `<span class="card--bottom__exp">Sin Expensas</span>`
              }
              <div class="card--bottom__line"></div>
              <div class="card--bottom__info">
                <p><strong>${mets}</strong> m² totales</p>
                <p><strong>${baths}</strong> baños</p>
                <p><strong>${usedMets}</strong> m² cubiertos</p>
                <p><strong>${rooms}</strong> ambientes</p>
              </div>
            </div>
                                    </article>`;
            /*FUNCION CLICK*/
            clickFunction(container, mainTitle);
            setTimeout(() => {
              loadImgs(id, uniqueId);
            }, 500);
          }, 500);
        }, 600);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        container.innerHTML = `<p>No hay resultados para tu busqueda</p>`;
      });
  });
}

/*FILTRO COMPRA*/
mainBtn.addEventListener("click", (e) => {
  let type = typeFilter.value;
  let city = cityFilter.value;
  let prop = propFilter.value;
  e.preventDefault();
  if (city == "Todas") {
    let query = global.where("type", "==", type).where("propCat", "==", prop);
    query
      .get()
      .then((querySnapshot) => {
        e.preventDefault();
        menuMobile.style.opacity = 0;
        closeMobile.style.opacity = 0;
        faq.style.opacity = 0;
        main.style.display = "flex";
        header.style.display = "flex";

        setTimeout(() => {
          main.style.opacity = 1;
          header.style.opacity = 1;
          faq.style.display = "none";
          menuMobile.style.display = "none";
          closeMobile.style.display = "none";
        }, 300);
        scroll({
          top: 320,
          behavior: "smooth",
        });
        main.innerHTML = `<div class="modal"></div>
        <div class="main--title">Resultado para:
        <span><i class="fa-solid fa-house-chimney"></i>${prop}</span>
        <span><i class="fa-solid fa-file-signature"></i>${type}</span>
        <span><i class="fa-solid fa-map"></i>${city}</span>
        </div>
        <div class="main--container"></div>`;
        setTimeout(() => {
          let container = document.querySelector(".main--container");
          let mainTitle = document.querySelector(".main--title");
          querySnapshot.forEach((item) => {
            /*CARGA EN PANTALLA DE RESULTADOS DEL FILTRO*/
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
            container.innerHTML += `<article class="card" data-item=${uniqueId}>
          <div class="card--top">
            <div id="carousel${id}" data-item=${uniqueId} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
            <div class="carousel-indicators" id='${uniqueId}'>
            </div>
            <div class="carousel-inner" id='${id}'>
                
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carousel${id}"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carousel${id}"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="card--bottom">
            <p class="card--bottom__type">
            ${type}
            </p>
            <p class="card--bottom__desc">
              ${title}
            </p>
            <span class="card--bottom__price">${price}</span>
            ${
              exp != 0
                ? `<span class="card--bottom__exp">+${exp}</span>`
                : `<span class="card--bottom__exp">Sin Expensas</span>`
            }
            <div class="card--bottom__line"></div>
            <div class="card--bottom__info">
              <p><strong>${mets}</strong> m² totales</p>
              <p><strong>${baths}</strong> baños</p>
              <p><strong>${usedMets}</strong> m² cubiertos</p>
              <p><strong>${rooms}</strong> ambientes</p>
            </div>
          </div>
                                  </article>`;
            /*FUNCION CLICK*/
            clickFunction(container, mainTitle);
            setTimeout(() => {
              loadImgs(id, uniqueId);
            }, 500);
          }, 500);
        }, 600);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        let container = document.querySelector(".main--container");
        container.innerHTML = `<p>No hay resultados para tu busqueda</p>`;
      });
  } else {
    let query = global
      .where("type", "==", type)
      .where("city", "==", city)
      .where("propCat", "==", prop);
    query
      .get()
      .then((querySnapshot) => {
        e.preventDefault();
        menuMobile.style.opacity = 0;
        closeMobile.style.opacity = 0;
        faq.style.opacity = 0;
        main.style.display = "flex";
        header.style.display = "flex";

        setTimeout(() => {
          main.style.opacity = 1;
          header.style.opacity = 1;
          faq.style.display = "none";
          menuMobile.style.display = "none";
          closeMobile.style.display = "none";
        }, 300);
        scroll({
          top: 320,
          behavior: "smooth",
        });
        main.innerHTML = `<div class="modal"></div>
        <div class="main--title">Resultado para:
        <span><i class="fa-solid fa-house-chimney"></i>${prop}</span>
        <span><i class="fa-solid fa-file-signature"></i>${type}</span>
        <span><i class="fa-solid fa-map"></i>${city}</span>
        </div>
        <div class="main--container"></div>`;
        setTimeout(() => {
          let container = document.querySelector(".main--container");
          let mainTitle = document.querySelector(".main--title");
          querySnapshot.forEach((item) => {
            /*CARGA EN PANTALLA DE RESULTADOS DEL FILTRO*/
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
            container.innerHTML += `<article class="card" data-item=${uniqueId}>
          <div class="card--top">
            <div id="carousel${id}" data-item=${uniqueId} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
            <div class="carousel-indicators" id='${uniqueId}'>
            </div>
            <div class="carousel-inner" id='${id}'>
                
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carousel${id}"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carousel${id}"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="card--bottom">
            <p class="card--bottom__type">
            ${type}
            </p>
            <p class="card--bottom__desc">
              ${title}
            </p>
            <span class="card--bottom__price">${price}</span>
            ${
              exp != 0
                ? `<span class="card--bottom__exp">+${exp}</span>`
                : `<span class="card--bottom__exp">Sin Expensas</span>`
            }
            <div class="card--bottom__line"></div>
            <div class="card--bottom__info">
              <p><strong>${mets}</strong> m² totales</p>
              <p><strong>${baths}</strong> baños</p>
              <p><strong>${usedMets}</strong> m² cubiertos</p>
              <p><strong>${rooms}</strong> ambientes</p>
            </div>
          </div>
                                  </article>`;
            /*FUNCION CLICK*/
            clickFunction(container, mainTitle);
            setTimeout(() => {
              loadImgs(id, uniqueId);
            }, 500);
          }, 500);
        }, 600);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        let container = document.querySelector(".main--container");
        container.innerHTML = `<p>No hay resultados para tu busqueda</p>`;
      });
  }
});

/*FUNCION MAIN, PETICION DE 3 PROPIEDADES*/
global
  .orderBy("id", "desc")
  .limit(3)
  .get()
  .then((querySnapshot) => {
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
      container.innerHTML += `<article class="card" data-item=${uniqueId}>
          <div class="card--top">
            <div id="carousel${id}" data-item=${uniqueId} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
            <div class="carousel-indicators" id='${uniqueId}'>
            </div>
            <div class="carousel-inner" id='${id}'>
                
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carousel${id}"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carousel${id}"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="card--bottom">
            <p class="card--bottom__type">
            ${type}
            </p>
            <p class="card--bottom__desc">
              ${title}
            </p>
            <span class="card--bottom__price">${price}</span>
            ${
              exp != 0
                ? `<span class="card--bottom__exp">+${exp}</span>`
                : `<span class="card--bottom__exp">Sin Expensas</span>`
            }
            <div class="card--bottom__line"></div>
            <div class="card--bottom__info">
              <p><strong>${mets}</strong> m² totales</p>
              <p><strong>${baths}</strong> baños</p>
              <p><strong>${usedMets}</strong> m² cubiertos</p>
              <p><strong>${rooms}</strong> ambientes</p>
            </div>
          </div>
        </article>`;
      /*FUNCION CLICK*/
      clickFunction(container, mainTitle);
      setTimeout(() => {
        loadImgs(id, uniqueId);
      }, 500);
    });
  });

/*FAQ*/
for (btns of navFaq) {
  btns.addEventListener("click", () => {
    main.style.opacity = 0;
    header.style.opacity = 0;
    cont.style.opacity = 0;
    faq.style.display = "flex";
    setTimeout(() => {
      faq.style.opacity = 1;
      cont.style.display = "none";
      main.style.display = "none";
      header.style.display = "none";
    }, 500);
  });
}

/*CONTACTO NAV*/
for (btns of navCont) {
  btns.addEventListener("click", () => {
    main.style.opacity = 0;
    header.style.opacity = 0;
    faq.style.opacity = 0;
    cont.style.display = "flex";
    setTimeout(() => {
      cont.style.opacity = 1;
      faq.style.display = "none";
      main.style.display = "none";
      header.style.display = "none";
    }, 500);
  });
}

/*CONTACTO*/
submitBtnCont.addEventListener("click", () => {
  let name = submitNameCont.value;
  let mail = submitMailCont.value;
  let phone = submitPhoneCont.value;
  let message = submitTextCont.value;
  emailjs.send("service_rzf65th", "template_64qcnn6", {
    from_name: name,
    message: `Telefono: ${phone}, Mail: ${mail},Consulta: ${message}, desde el menu de contacto`,
  });
  setTimeout(() => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Consulta enviada",
      showConfirmButton: false,
      timer: 1500,
    });
    submitMailCont.value = "";
    submitPhoneCont.value = "";
    submitTextCont.value = "";
    submitNameCont.value = "";
  }, 1000);
});

var randomnumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
let url = `images/${randomnumber}.jpg`;
console.log(url);
header.style.backgroundImage = `url('${url}')`;

emailjs.init("mCApRysOmHiQESvSZ");
