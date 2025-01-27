const Matic = {
  symbol: 'matic',
  color: '#000',
  colorIcon() {
    return `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48z" fill="#2B6DEF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M68.002 24l-9.988 5.759h-.01v11.519l-.035.005L28.001 24l-9.996 5.76-.005-.002V65.57l9.995 5.763.006-.046v.043L38 65.57V52.81l9.978 5.75.006.012.008-.005 10.014-5.732v12.74l9.953 5.736v.03l.025-.015.018.01.014-.028 9.94-5.727V29.79l.045-.026L68.002 24z" fill="#fff"/>`;
  },
  plainIcon: c => {
    return `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" fill-rule="evenodd" clip-rule="evenodd" d="M96 48c0 26.51-21.49 48-48 48S0 74.51 0 48 21.49 0 48 0s48 21.49 48 48zM58.014 29.759L68.002 24 78 29.764l-.044.026v35.79l-9.941 5.727-.014.028-.018-.01-.025.015v-.03l-9.953-5.736v-12.74L47.99 58.566l-.008.005-.005-.013-9.98-5.75v12.76L28 71.329v-.043l-.006.046L18 65.569V29.758l.005.002L28.001 24l29.968 17.283.036-.005v-11.52h.009z" fill="#000"/>`;
  }
};
export default Matic;
