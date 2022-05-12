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
let adminList = document.querySelector(".adminList");
let closeList = document.querySelector(".closeList");
let descTest = "";
const global = db.collection("global");
const contador = db.collection("info").doc("contador");

/*FUNCION CARGAR SERVICIOS DENTRO DEL MODAL*/
const loadInfo = (services, desc) => {
  let checkboxes = document.querySelector(".modalInfoCheck");
  let modalInfoDesc = document.querySelector(".modalInfoDesc");
  checkboxes.innerHTML = " ";
  for (service in services) {
    if (services[service] == true) {
      checkboxes.innerHTML += `<li><i class="fa-solid fa-square-check"></i>${service}</li>`;
    }
  }
  modalInfoDesc.innerHTML = desc;
};

/*FUNCION ABRIR MODAL POR ITEM*/
const clickFunction = (param, container, mainTitle) => {
  /*UNA VEZ QUE SE CUMPLE CON LA PETICION DE DATOS CARGAMOS LA FUNCION DE MODAL ON CLICK*/
  let cards = document.querySelectorAll(".card");
  let modal = document.querySelector(".modal");
  for (card of cards) {
    card.addEventListener("click", (e) => {
      let child = e.target;
      let parent = child.parentElement;
      let dataId = parent.getAttribute("data-item");
      var propsRef = db.collection("global");
      let reference = propsRef.where(param, "==", dataId);
      reference.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let queryResult = doc.data();
          /*SI TOCAMOS LA CARD Y NO ES UNO NI OTRO SE ABRE EL MODAL*/
          if (
            child.className == "card--bottom" ||
            child.className == "carousel-inner"
          ) {
            modal.style.display = "flex";
            modal.style.opacity = 1;
            modal.innerHTML = `<div class="lds-ripple"><div></div><div></div></div>`;
            container.style.opacity = 0;
            mainTitle.style.opacity = 0;
            header.style.opacity = 0;
            document.documentElement.scrollTop = 0;
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
                  <h5><i class="fa-solid fa-location-dot"></i> ${dir}</h5>
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
                  <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/90277970-0d15-4132-8187-7232723ad98d.webp"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/fb797201-c7f4-4da6-87c5-55836199b77a.webp"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/23235dc5-a208-4813-acf5-e11b0143eaa1.webp"
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carousel1"
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
                      data-bs-target="#carousel1"
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
                    <div class="modalInfoInd">
                      <p><i class="fa-solid fa-vector-square"></i> Metros totales: <strong>${mets}</strong></p>
                      <p><i class="fa-solid fa-vector-square"></i> Metros Cubiertos: <strong>${usedMets}</strong></p>
                      <p><i class="fa-solid fa-bath"></i> Ambientes: <strong>${rooms}</strong></p>
                      <p><i class="fa-solid fa-car"></i> Cochera: <strong>${garage}</strong></p>
                      <p><i class="fa-solid fa-calendar-days"></i> Antiguedad:<br><strong>${old}</strong></p>
                      <p><i class="fa-solid fa-money-bill-1-wave"></i> Valor: <strong>${price}</strong></p>
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
                  <div class="modalInfo">
                    <span>UBICACION</span>
                    <hr class="modalInfoLine" />
                    <div class="modalInfoInd">
                      <img src="https://i.blogs.es/b4dd5c/maps/1366_2000.png" alt="" />
                    </div>
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
                    <input
                      type="button"
                      value="Quiero que me contacten"
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
                }, 500);
              });
              loadInfo(services, desc);
            }, 600);
          }
        });
      });
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
navAlq.addEventListener("click", (e) => {
  global
    .where("type", "==", "alquiler")
    .get()
    .then((querySnapshot) => {
      e.preventDefault();
      menuMobile.style.opacity = 0;
      closeMobile.style.opacity = 0;

      setTimeout(() => {
        menuMobile.style.display = "none";
        closeMobile.style.display = "none";
      }, 300);
      scroll({
        top: 320,
        behavior: "smooth",
      });
      setTimeout(() => {
        main.innerHTML = `<div class="modal"></div><h2 class="main--title">Alquilar</h2><div class="main--container"></div>`;
        querySnapshot.forEach((doc) => {
          /*CARGA EN PANTALLA DE RESULTADOS DEL FILTRO*/
          let result = doc.data();
          let container = document.querySelector(".main--container");
          let mainTitle = document.querySelector(".main--title");
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
          } = result;
          let wppTxt = title.split(" ").join("+");
          wppTxt += `+${dir}`;
          container.innerHTML += `<article class="card" data-item=${id}>
          <div class="card--top">
            <div id="carousel${id}" data-item=${id} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/90277970-0d15-4132-8187-7232723ad98d.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/fb797201-c7f4-4da6-87c5-55836199b77a.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/23235dc5-a208-4813-acf5-e11b0143eaa1.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
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
          clickFunction("id", container, mainTitle);
        }, 500);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
      console.log("hay 0 objetos");
      let container = document.querySelector(".main--container");
      container.innerHTML = `<p>No hay resultados para tu busqueda</p>`;
    });
});

/*FILTRO COMPRA*/
navBuy.addEventListener("click", (e) => {
  global
    .where("type", "==", "venta")
    .get()
    .then((querySnapshot) => {
      e.preventDefault();
      menuMobile.style.opacity = 0;
      closeMobile.style.opacity = 0;

      setTimeout(() => {
        menuMobile.style.display = "none";
        closeMobile.style.display = "none";
      }, 300);
      scroll({
        top: 320,
        behavior: "smooth",
      });
      setTimeout(() => {
        main.innerHTML = `<div class="modal"></div><h2 class="main--title">Comprar</h2><div class="main--container"></div>`;
        querySnapshot.forEach((doc) => {
          /*CARGA EN PANTALLA DE RESULTADOS DEL FILTRO*/
          let result = doc.data();
          let container = document.querySelector(".main--container");
          let mainTitle = document.querySelector(".main--title");
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
          } = result;
          let wppTxt = title.split(" ").join("+");
          wppTxt += `+${dir}`;
          container.innerHTML += `<article class="card" data-item=${id}>
          <div class="card--top">
            <div id="carousel${id}" data-item=${id} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/90277970-0d15-4132-8187-7232723ad98d.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/fb797201-c7f4-4da6-87c5-55836199b77a.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/23235dc5-a208-4813-acf5-e11b0143eaa1.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
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
          clickFunction("id", container, mainTitle);
        }, 500);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
      console.log("hay 0 objetos");
      let container = document.querySelector(".main--container");
      container.innerHTML = `<p>No hay resultados para tu busqueda</p>`;
    });
});

/*FUNCION MAIN, PETICION DE INFORMACION*/
global.get().then((querySnapshot) => {
  querySnapshot.forEach((item) => {
    let prop = item.data();
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
    container.innerHTML += `<article class="card" data-item=${id}>
          <div class="card--top">
            <div id="carousel${id}" data-item=${id} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/90277970-0d15-4132-8187-7232723ad98d.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/fb797201-c7f4-4da6-87c5-55836199b77a.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/23235dc5-a208-4813-acf5-e11b0143eaa1.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
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
    clickFunction("id", container, mainTitle);
  });
});

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
                console.log("Document successfully deleted!");
                location.reload();
              })
              .catch((error) => {
                console.error("Error removing document: ", error);
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
/*LOGIN*/
loginBtn.addEventListener("click", (e) => {
  e.preventDefault;
  let email = loginUser.value;
  let password = loginPass.value;
  console.log("click");
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

contador.get().then((doc) => {
  let id = doc.data();
  /*OPEN UPLOAD MODAL*/
  openUpload.addEventListener("click", () => {
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.display = "none";
      uploadModal.style.display = "flex";
    }, 500);
  });

  /*FIRST CONFIRM UPLOAD*/
  submitForm1.addEventListener("click", () => {
    formUno.style.opacity = 0;
    setTimeout(() => {
      formUno.style.display = "none";
      formDos.style.display = "flex";
    }, 500);
  });
  /*SECOND CONFIRM UPLOAD*/
  submitForm2.addEventListener("click", () => {
    formDos.style.opacity = 0;
    setTimeout(() => {
      formDos.style.display = "none";
      formTres.style.display = "flex";
    }, 500);
  });
  /*ADD DESC*/
  addDesc.addEventListener("click", () => {
    let descResult = itemDesc.value;
    showDesc.innerHTML = "";
    descTest += `<li class="itemDesc"><span>${descResult}</span><input type='button' value='Eliminar' class="deleteDesc" /></li>`;
    showDesc.innerHTML = descTest;
    itemDesc.value = "";
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
  });

  /*THIRD CONFIRM UPLOAD*/
  submitForm3.addEventListener("click", () => {
    formTres.style.opacity = 0;
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
    let lat = itemLat.value;
    let long = itemLong.value;
    let prop = itemProp.value;
    let idFinal = id.id;
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
        prop: prop,
        lat: lat,
        long: long,
        desc: desc,
        services: {
          Internet: false,
          Electricidad: true,
          Gas: true,
          Pavimento: true,
          Agua: true,
        },
        dir: dir,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
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
          .then(() => {
            console.log("se actualizo el id: ", idFinal);
          });
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
    itemLat.value = "";
    itemLong.value = "";
    setTimeout(() => {
      formTres.style.display = "none";
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
