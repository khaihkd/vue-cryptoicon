const Exmo = {
  symbol: 'exmo',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#347FFB" fill-rule="nonzero"/><path fill="#FFF" d="M19.7 13.055l-2.869 7.75-.018.047-.526-1.055-1.1.5 2.885-7.797 1.1-.5.527 1.055zm7.18.183L24.012 21l-.527-1.058-1.1.5.067-.182 2.867-7.76 1.1-.5.525 1.055-.064.183zm-6.14 6.712l1.689-4.563-1.103.5-.524-1.057-1.694 4.562.525 1.058 1.107-.5zm-9.137-4.5H6.558l.86.8-.86.813h5.04l.856-.813-.851-.8zM5.86 18.833h8.155l-.857.807.857.805H5.86L5 19.64l.86-.808zm2.501-6.768h8.15l-.854.808.855.805h-8.15l-.86-.806.86-.807z"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.7-18.945L19.171 12l-1.1.5-2.885 7.797 1.1-.5.526 1.055.018-.047 2.868-7.75zm7.18.183l.064-.183L26.419 12l-1.1.5-2.867 7.76-.067.182 1.1-.5.527 1.058 2.868-7.762zm-6.14 6.712l1.689-4.563-1.103.5-.524-1.057-1.694 4.562.525 1.058 1.107-.5zm-9.137-4.5H6.558l.86.8-.86.813h5.04l.856-.813-.851-.8zM5.86 18.833L5 19.64l.86.805h8.155l-.857-.805.857-.808H5.86zm2.501-6.768l-.86.808.86.805h8.15l-.854-.806.855-.807h-8.15z"/>`;
  }
};
export default Exmo;
