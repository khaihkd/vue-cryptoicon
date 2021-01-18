const Oxt = {
  symbol: 'oxt',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.663 7.55a8.58 8.58 0 00-1.656.057 7.086 7.086 0 00-2.089.524c-.775.38-1.275 1.013-1.275 1.86 0 1.1.892 1.994 1.994 1.994.184 0 .821-.202.973-.254a4.606 4.606 0 016.114 4.644 4.608 4.608 0 01-8.314 2.437l-.133-.19-.101-.143c-.804-1.208-.607-2.99-.608-3.013a1.997 1.997 0 00-3.922-.451c-.045.167-.068.656-.061.721a8.547 8.547 0 009.547 8.836 8.549 8.549 0 00-.47-17.021zm-7.99 2.64a1.425 1.425 0 10.129.068zm1.28-2.591a1.099 1.099 0 10.107.056zm-3.625-.038a.776.776 0 10.094.048z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle fill="#5F45BA" cx="16" cy="16" r="16"/><path d="M10.443 9.16a1.099 1.099 0 11-.383-1.505c.521.31.693.983.383 1.505m-3.75-.488a.777.777 0 11-.27-1.063c.368.22.49.695.27 1.063m10.439 15.9a8.549 8.549 0 10-2.125-16.965 7.088 7.088 0 00-2.089.524c-.775.38-1.275 1.013-1.275 1.86 0 1.1.892 1.994 1.994 1.994.184 0 .821-.202.973-.254a4.606 4.606 0 016.114 4.644 4.608 4.608 0 01-8.447 2.246v.001c-.92-1.205-.708-3.131-.709-3.156a1.997 1.997 0 00-3.922-.451c-.045.167-.068.656-.061.721a8.547 8.547 0 009.547 8.836M9.3 12.21a1.424 1.424 0 11-.498-1.952c.676.402.898 1.276.497 1.952" fill="#FFF"/></g>`;
  }
};
export default Oxt;
