const Xpm = {
  symbol: 'xpm',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#ffd81b" r="16"/><path d="M24 15.562c0 4.423-3.426 5.927-6.31 5.927v1.153h2.225v1.562h-2.224V26h-3.48v-1.796h-2.127v-1.562h2.123v-1.168c-.923 0-6.207-.219-6.207-6.233V8h3.455v7.518c0 3.139 2.766 3.11 2.766 3.11V8h3.47v10.628s2.854.16 2.854-3.153V8H24z" fill="#fff" fill-rule="nonzero"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8-16.438V8h-3.455v7.475c0 3.313-2.854 3.153-2.854 3.153V8h-3.47v10.628s-2.766.029-2.766-3.11V8H8v7.24c0 6.015 5.284 6.234 6.207 6.234v1.168h-2.123v1.562h2.127V26h3.48v-1.796h2.224v-1.562h-2.224V21.49c2.883 0 6.309-1.504 6.309-5.927z" fill-rule="evenodd"/>`;
  }
};
export default Xpm;
