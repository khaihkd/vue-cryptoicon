const Xvg = {
  symbol: 'xvg',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#00CBFF"/><path fill="#FFF" d="M9.61 10.335L8 7h16l-1.592 3.335H24L15.951 27 8 10.335h1.61zm0 0l6.438 13.33 6.36-13.33H9.611z"/><path fill="#FFF" opacity=".504" d="M16 24.5L8 7h15.999z"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M9.61 10.335H8L15.951 27 24 10.335h-1.59l-6.36 13.33-6.438-13.33zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.61 10.335h12.798L24 7H8l1.61 3.335z"/>`;
  }
};
export default Xvg;
