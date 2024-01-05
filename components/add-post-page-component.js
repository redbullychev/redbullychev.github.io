import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";

  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
    <div class="header-container"></div>
      <div class="header-container"></div>
      <h3 class="form-title">
      Добавить пост
      </h3>
      <div class="form-inputs">
      <div class="upload-image-container"></div>
      <label>
      Опишите фотографию:
      <textarea id="comment-input" class="input textarea" rows="4" name="text"></textarea>
      </label>
      <button class="button" id="add-button">Добавить</button>
      </div>
  
    </div>
  `;

    appEl.innerHTML = appHtml;

    renderUploadImageComponent({
      element: appEl.querySelector(".upload-image-container"),
      onImageUrlChange(newImageUrl) {
        imageUrl = newImageUrl;
      },
    });

    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });

    document.getElementById("add-button").addEventListener("click", () => {
     const comment = document.getElementById("comment-input");
     let description = comment.value;
      onAddPostClick({
        description,
        imageUrl,
      });
    });
  };
  render();
}
