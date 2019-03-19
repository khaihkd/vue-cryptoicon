const Cmt = {
  symbol: 'cmt',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.276-6a10.152 10.152 0 0 0 3.937-.77c1.694-.69 3.111-1.743 4.219-3.186a9.784 9.784 0 0 0 1.99-4.799c.244-1.918-.089-3.736-.907-5.472-.594-1.26-1.448-2.338-2.504-3.26-1.427-1.244-3.09-2.012-4.957-2.35a10.126 10.126 0 0 0-4.145.11 10.305 10.305 0 0 0-4.115 1.974c-.254.202-.28.36-.092.626.124.176.268.34.412.502.305.342.441.348.8.068a8.264 8.264 0 0 1 2.403-1.31c1.645-.566 3.319-.667 5.023-.255 1.909.46 3.489 1.435 4.705 2.944 1.736 2.154 2.226 4.607 1.567 7.255-.525 2.11-1.78 3.76-3.618 4.947-1.533.989-3.23 1.43-5.075 1.366a8.564 8.564 0 0 1-4.823-1.646c-.609-.438-.606-.441-1.12.116l-.037.039c-.42.452-.405.659.088 1.02 1.854 1.363 3.93 2.075 6.249 2.08zm-.636-6.383c-.098-.006-.12-.013-.133-.007-.04.02-.079.044-.118.066-.47.263-.964.359-1.498.218-.201-.053-.255-.134-.136-.32.437-.686.59-1.447.552-2.242-.047-.992-.36-1.88-1.133-2.568a4.243 4.243 0 0 0-2.883-1.106c-.463-.003-.927.028-1.391.045-.195.007-.268-.07-.211-.262.075-.259.145-.52.211-.78.04-.156.127-.216.292-.217.737-.004 1.474-.014 2.211-.031.71-.017 1.362-.217 1.932-.647.482-.363.742-.83.704-1.436-.004-.074-.036-.172-.09-.207-.035-.024-.146.028-.2.073-.454.374-.97.632-1.556.662-.789.04-1.582.031-2.372.012-.527-.012-1.051-.091-1.578-.12-.358-.02-.603.139-.697.446-.43 1.4-.852 2.801-1.269 4.205-.058.194-.21.413.017.597.219.176.423.012.61-.074 1.268-.585 2.557-.63 3.875-.18 1.502.512 1.899 1.897 1.284 3.153-.136.278-.217.284-.489.122-.474-.283-.938-.589-1.434-.83-1.086-.526-2.221-.74-3.414-.39-.646.19-1.273.768-1.223 1.615.029.486.27.832.612 1.125.454.39.987.619 1.582.745 1.808.384 3.524.238 5.118-.762a.78.78 0 0 1 .382-.096c.345-.008.691.022 1.036.01.498-.015.91-.228 1.25-.583.055-.058.09-.134.157-.236zm-4.568.226c-.235.1-.464.225-.708.297-.952.282-1.9.272-2.834-.088a1.069 1.069 0 0 1-.264-.137c-.246-.188-.457-.403-.37-.748.08-.313.352-.382.624-.445.604-.141 1.181.004 1.736.207.544.198 1.067.458 1.597.693.072.032.136.083.203.124l.016.097z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#c1a05c" r="16"/><path d="M16.276 26c-2.319-.006-4.395-.718-6.249-2.08-.493-.362-.508-.57-.088-1.021l.038-.04c.513-.556.51-.553 1.119-.115a8.564 8.564 0 0 0 4.823 1.646c1.846.064 3.542-.377 5.075-1.366 1.839-1.186 3.093-2.838 3.618-4.947.659-2.648.169-5.1-1.567-7.255-1.216-1.51-2.796-2.483-4.705-2.944-1.704-.412-3.378-.311-5.023.255-.871.3-1.676.742-2.403 1.31-.359.28-.495.274-.8-.068a5.714 5.714 0 0 1-.412-.502c-.188-.266-.162-.424.092-.626a10.305 10.305 0 0 1 4.115-1.974 10.126 10.126 0 0 1 4.145-.11c1.868.338 3.53 1.106 4.957 2.35 1.056.922 1.91 2 2.504 3.26.818 1.736 1.151 3.554.906 5.472a9.784 9.784 0 0 1-1.99 4.8c-1.107 1.442-2.524 2.494-4.218 3.185a10.15 10.15 0 0 1-3.937.77zm-.636-6.383c-.067.102-.102.178-.158.236-.338.355-.751.568-1.249.584-.345.01-.691-.019-1.036-.011a.78.78 0 0 0-.382.096c-1.594 1-3.31 1.146-5.118.762-.595-.126-1.128-.355-1.582-.745-.342-.293-.583-.639-.612-1.125-.05-.847.577-1.425 1.223-1.614 1.193-.35 2.328-.137 3.414.39.496.24.96.546 1.434.83.272.161.353.155.489-.123.615-1.256.218-2.641-1.284-3.153-1.318-.45-2.607-.405-3.876.18-.186.086-.39.25-.609.074-.227-.184-.075-.403-.017-.597.417-1.404.84-2.805 1.269-4.205.094-.307.339-.465.697-.446.527.029 1.051.108 1.578.12.79.02 1.583.027 2.372-.012.587-.03 1.102-.288 1.555-.662.055-.045.166-.097.202-.073.053.035.085.133.09.207.037.606-.223 1.073-.705 1.436-.57.43-1.221.63-1.932.647-.737.017-1.474.027-2.21.03-.166.002-.254.062-.293.218-.066.26-.136.521-.211.78-.057.193.016.27.211.262.464-.017.928-.048 1.391-.045a4.246 4.246 0 0 1 2.883 1.106c.773.688 1.086 1.576 1.133 2.568.037.795-.115 1.556-.552 2.241-.119.187-.065.268.136.321.534.141 1.027.045 1.498-.218.04-.022.077-.047.118-.066.014-.006.035.001.133.007zm-4.568.226l-.016-.097c-.067-.041-.13-.092-.203-.124-.53-.235-1.053-.495-1.597-.693-.555-.203-1.132-.348-1.736-.207-.272.063-.544.132-.623.445-.088.345.123.56.369.748.077.059.172.101.264.137.934.36 1.882.37 2.834.088.244-.072.473-.197.708-.297z" fill="#fff"/></g>`;
  }
};
export default Cmt;