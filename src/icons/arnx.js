const Arnx = {
  symbol: 'arnx',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM7.975 23.475a11.984 11.984 0 001.93 1.64c.18.118.37.235.577.352.559.325 1.091.568 1.569.758.135.054.27.108.424.162a11 11 0 003.282.577v-1.776l-3.891-.857zm16.005.036c-2.525.559-5.05 1.118-7.574 1.668v1.776l.355-.019a10.933 10.933 0 007.219-3.425zm-1.858-3.291c-.379.072-.694.135-.91.18-.01 0-.019 0-.028.009-.333.072-.649.135-.955.19-.172.035-.334.053-.487.08-.036.01-.081.01-.135.019 0 0-.109.018-.253.027a1.26 1.26 0 01-.28-.01.26.26 0 01-.135-.045c-.045-.027-.072-.063-.099-.09l-1.109 1.948-1.109 1.947c2.254-.495 4.5-1 6.753-1.496a2.313 2.313 0 01-.144-.199c-.063-.09-.117-.198-.18-.315a3.737 3.737 0 01-.162-.334l-.005-.012a9.79 9.79 0 01-.302-.7c-.027-.063-.045-.117-.072-.171a23.698 23.698 0 01-.388-1.028zm-12.154 0c-.063.18-.126.351-.198.532a8.394 8.394 0 01-.199.505c-.063.162-.126.315-.189.468a9.247 9.247 0 01-.19.415 6.66 6.66 0 01-.351.65.857.857 0 01-.135.189l6.744 1.487-.005-.008-1.136-1.948-.207-.356-.897-1.538-.036.036-.027.022-.027.015c-.081.045-.235.054-.47.036a8.8 8.8 0 01-.576-.082c-.081-.009-.153-.027-.226-.036-.072-.018-.153-.027-.225-.045a11.365 11.365 0 01-.478-.099l-.243-.054-.325-.07a30.002 30.002 0 00-.604-.12zm12.875-8.782H9.157l-.054.111c-.04.071-.09.135-.145.195l7.087 12.47 7.06-12.416-.083-.078a.832.832 0 01-.179-.282zM5.947 19.147l-.235.676.152.385c.371.89.851 1.716 1.435 2.473.235.054.46.1.694.153a1.3 1.3 0 01.037-.342c.036-.172.08-.352.135-.56l.054-.216.084-.294c.06-.2.123-.406.195-.616.027-.081.054-.154.072-.226.046-.144.09-.288.136-.423a1.51 1.51 0 01.063-.19c-.244-.054-.532-.126-.839-.19a18.805 18.805 0 01-.901-.225c-.217-.063-.415-.117-.586-.18-.063-.018-.118-.045-.172-.063a1.985 1.985 0 01-.189-.081.89.89 0 01-.135-.081zm20.305-.127c-.082.109-.217.19-.424.271a9.522 9.522 0 01-.758.243c-.054.018-.108.027-.153.046l-.135.036-.19.048-.189.042a2.818 2.818 0 01-.225.054l-.138.033c-.196.047-.434.098-.7.156.071.253.162.532.27.848.099.315.198.622.28.91.026.09.044.172.071.262.046.135.082.27.109.433.009.027.009.054.018.08.036.145.045.253.036.334 0 0 .378-.072.568-.117a10.969 10.969 0 001.722-3.2zm-10.54.56c.124 0 .225.1.225.225 0 .135-.1.234-.226.234l-.06-.008a.224.224 0 01-.165-.222c0-.129.101-.23.225-.23zm-4.653-2.85a1.855 1.855 0 00-.063.262c-.018.09-.045.19-.072.297l-.054.217-.064.22c-.044.147-.09.3-.144.456a9.465 9.465 0 00-.153.469c-.054.153-.1.306-.153.45.243.064.478.118.685.172.108.027.207.054.307.072.099.027.189.045.279.072.045.01.09.018.126.036l.127.027c.08.018.153.036.225.063.144.037.28.073.388.109.108.027.198.063.28.09zm9.972.018l-1.695 2.976.01-.01.075-.026a2.6 2.6 0 01.177-.054c.234-.073.522-.145.874-.235s.767-.19 1.253-.315c-.099-.298-.207-.604-.306-.92a12.043 12.043 0 01-.27-.893 5.16 5.16 0 01-.118-.523zM8.4 12.068L6.172 18.48l.073-.01c.05-.005.101-.009.162-.009.207 0 .45.01.73.037.288.027.604.072.947.135.351.063.712.126 1.082.207.099-.28.198-.577.306-.901a20.2 20.2 0 01.496-1.308 6.19 6.19 0 01.162-.342c.036-.082.072-.145.109-.199a.88.88 0 01.099-.126.274.274 0 01.063-.045.254.254 0 01.135-.036L8.4 12.069zm15.364-.071h-.036l-2.19 3.85.02.004.033.005c.01 0 .01 0 .018.009.01 0 .01 0 .018.009.01 0 .01.009.018.009.01 0 .01 0 .018.009a.296.296 0 01.072.054c.036.036.064.072.073.081.009.01.009.018.018.027a.793.793 0 01.054.09c.045.081.072.126.072.126.108.208.216.451.324.74.109.288.226.595.334.92.027.072.045.135.072.207.063.19.144.424.235.694.378-.072.739-.144 1.09-.207.352-.063.668-.108.956-.135.289-.028.532-.046.74-.037.117 0 .207.01.288.028.018 0 .045.009.063.009-.171-.478-.351-1.01-.559-1.578l-1.73-4.914zm-17.23-1.524a10.904 10.904 0 00-1.497 5.103v.758l.021.421c.048.699.158 1.377.33 2.031.803-2.326 1.615-4.643 2.417-6.97a.906.906 0 01-.252-.297.835.835 0 01-.1-.397v-.063l.003-.012a.38.38 0 00.006-.051zm19.006.09c-.333.19-.658.37-.991.56 0 .026 0 .053-.01.08-.008.054-.018.1-.027.145-.009.027-.018.045-.027.072a.933.933 0 01-.099.189c-.018.018-.027.036-.045.054.785 2.263 1.569 4.517 2.353 6.78.046-.189.082-.387.118-.577 0-.018.009-.036.009-.063a3.08 3.08 0 00.027-.19c.009-.035.009-.062.018-.098.009-.09.027-.172.036-.27l.013-.137.014-.143c0-.027.009-.054.009-.081 0-.054.009-.1.009-.154.018-.28.027-.54.027-.784a10.968 10.968 0 00-1.1-4.734l-.027-.054-.059-.117-.058-.117-.054-.108-.068-.127zm-11.73 6.798c.126 0 .225.1.225.226s-.099.225-.225.225a.223.223 0 01-.225-.225l.008-.06.008-.025a.225.225 0 01.209-.14zm2.782-4.3c.116-.12.383-.303.834-.136l1.027.37.487.171c0 .01.289.118.514-.072l.523-.351s.28-.226.577-.073c.005 0 .01.003.016.014.002-.004.002.005.011.014.054.324-.243.532-.243.532l-.487.387-.072.059a.571.571 0 00-.153.37v.04L19.697 16v.137c-.035.555-.479.656-.487.656h-.01l-.008-.009c-.006 0-.008-.003-.01-.009 0 0-.008-.009-.008-.018-.135-.865-.244-1.514-.298-1.83l-.009-.045c-.006-.026-.018-.081-.042-.12a.121.121 0 00-.03-.024c-.081-.045-.198.036-.28.08l-.061.04c-.142.089-.296.187-1.03.7-.035.027-.072.054-.108.09a.324.324 0 00-.072.109c0 .009-.009.018-.009.027-.018.036-.036.072-.018.243 0 .045 0 .126-.036.207a.14.14 0 01-.054.073c-.009.009-.027.018-.036.036-.018.018-.045.027-.072.045h-.027l-.005-.007c-.013-.011-.013-.02-.013-.03v-.108a.686.686 0 00-.027-.189.521.521 0 00-.045-.126l-.072-.1-.082-.117a.955.955 0 00-.144-.156l-.025-.02-.018-.013.014.011-.016-.01a1.028 1.028 0 00-.171-.091.13.13 0 00-.063-.018c-.018-.01-.027-.01-.045-.01l-.013-.005c-.01-.012-.019-.012-.033-.012 0-.01 0-.018.01-.027a.387.387 0 01.06-.052l.012-.011c.018-.01.027-.018.045-.027.027-.01.063-.018.09-.027a.443.443 0 01.207.027c.153.063.19.063.235.063h.027l.044-.006a.368.368 0 00.082-.03.324.324 0 00.108-.072c.756-.59.894-.7.996-.787l.041-.034.046-.04.04-.039c.044-.048.078-.102.067-.155-.009-.063-.09-.1-.117-.118l-.027-.018c-.261-.135-.866-.441-1.668-.838-.009-.01-.018-.01-.018-.018-.01 0 0-.01 0-.018 0-.003.022-.041.068-.09zm-3.224.405c.125 0 .226.101.226.226 0 .135-.1.234-.226.234l-.06-.008a.224.224 0 01-.165-.222c0-.129.1-.23.225-.23zm1.704-1.127c.125 0 .226.101.226.226 0 .135-.1.234-.226.234l-.06-.008a.224.224 0 01-.165-.222c0-.129.1-.23.225-.23zm-4.12 0c.124 0 .225.101.225.226a.225.225 0 01-.225.234l-.06-.008a.223.223 0 01-.165-.222c0-.129.1-.23.225-.23zm5.13-3.327c-.333.343-.613.64-.847.893l-.163.171-.018.018-.103.105c-.065.069-.125.133-.185.193l-.126.126-.097.09a2.92 2.92 0 01-.246.208h3.561l-.018-.014-.018-.013c-.036-.046-.08-.073-.117-.109-.045-.036-.081-.072-.126-.108l-.28-.252-.297-.299a6.278 6.278 0 01-.307-.332c-.108-.118-.207-.235-.306-.343-.1-.117-.208-.226-.307-.334zm-2.488-3.3L9.12 10.725l.019.041.018.04h4.454l-.027-.031-.027-.032c-.018-.018-.027-.045-.037-.063-.018-.045-.036-.09-.036-.135 0-.027.01-.063.018-.108 0-.01.01-.018.01-.027.008-.018.018-.045.036-.072.027-.054.063-.118.108-.18.009-.01.009-.019.018-.019a12.153 12.153 0 01.874-1.09 3.59 3.59 0 01.18-.199c.064-.063.118-.135.181-.198.135-.154.27-.307.388-.451.009-.01.018-.018.018-.027a39.364 39.364 0 01-.965-1.163c-.09-.118-.171-.235-.252-.343a6.483 6.483 0 01-.37-.586l-.054-.108-.023-.053-.022-.046c-.018-.064-.036-.118-.036-.163zm4.94-.054v.018l.003.039a.82.82 0 01-.038.169.672.672 0 01-.09.18 3.78 3.78 0 01-.199.325c-.045.063-.09.135-.135.207a9.503 9.503 0 01-.37.505c-.063.072-.117.153-.18.234-.01.01-.018.027-.027.036-.117.145-.244.298-.379.451-.1.117-.19.226-.298.343.136.153.289.315.442.496.054.054.108.117.154.18.108.117.207.234.306.352l.289.342c.18.226.333.424.46.604.108.163.162.28.18.37v.036l-.008.068a.423.423 0 01-.118.194h4.31l.047-.103.06-.096-4.408-4.95zm.767-.117c1.398 1.569 2.795 3.147 4.202 4.716.018 0 .045-.01.063-.01h.19l.04.008c.046.008.11.02.185.047.009 0 .018.009.027.018l.036.018.101.06.088.066c.009 0 .009.009.018.009.027.018.045.045.063.063.298-.171.595-.334.884-.505a11.06 11.06 0 00-3.724-3.525l-.194-.116-.194-.11c-.018-.009-.027-.018-.045-.018a4.68 4.68 0 00-.37-.18.145.145 0 01-.063-.036c-.117-.054-.234-.108-.36-.162-.027-.01-.045-.018-.072-.027a5.173 5.173 0 00-.397-.154l-.054-.018-.209-.075zm-6.357-.081l-.351.108-.206.072c-.774.276-1.753.715-2.77 1.443a11.395 11.395 0 00-2.524 2.524c-.072.109-.153.208-.226.316.307.171.614.352.92.523.045-.036.1-.09.19-.126a.898.898 0 01.333-.081c.153-.01.27.036.334.054 1.433-1.614 2.867-3.22 4.3-4.833zm3.048-.433h-.252l-.117.005-.109.004h-.027l-.118.006-.125.012-.412.036c-.273.03-.541.07-.806.117-.036.036-.063.073-.099.118.018 0 .027-.01.045-.01h.036l.04.007c.027.008.06.024.096.048l.045.028.099.076.054.049c.162.144.343.316.55.523.198.198.406.415.622.65.207.224.397.432.568.603.081-.081.162-.171.244-.27.099-.109.198-.217.297-.334.1-.108.198-.225.307-.325.099-.108.198-.207.297-.306l.144-.144.08-.076.074-.069c.09-.08.171-.153.252-.216.172-.144.298-.207.397-.207.036 0 .072.009.108.018l-.099-.118-.13-.027-.132-.027c-.009 0-.018 0-.027-.009-.08-.018-.162-.027-.243-.036h-.018l-.252-.036h-.01l-.34-.037a10.809 10.809 0 00-1.039-.053z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle fill="#436697" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M19.075 20.716a.26.26 0 01-.136-.046.283.283 0 01-.09-.09h-.009l-2.218 3.895c2.254-.495 4.5-1 6.753-1.496a2.313 2.313 0 01-.144-.199c-.063-.09-.117-.198-.18-.315a5.431 5.431 0 01-.162-.325v-.009c0-.009-.01-.018-.01-.018a10.714 10.714 0 01-.297-.694c-.027-.063-.045-.117-.072-.171a23.698 23.698 0 01-.388-1.028c-.379.072-.694.135-.91.18-.01 0-.019 0-.028.009-.333.072-.649.135-.955.19-.172.035-.334.053-.487.08-.036.01-.081.01-.135.019 0 0-.109.018-.253.027a1.26 1.26 0 01-.28-.01zm2.073-3.445a5.16 5.16 0 01-.117-.523l-1.695 2.976.01-.01c.071-.026.152-.053.252-.08.234-.073.522-.145.874-.235s.767-.19 1.253-.315c-.099-.298-.207-.604-.306-.92a12.043 12.043 0 01-.27-.893zm2.615-5.274h-.036l-2.19 3.85c.008 0 .026.009.053.009.01 0 .01 0 .018.009.01 0 .01 0 .018.009.01 0 .01.009.018.009.01 0 .01 0 .018.009a.296.296 0 01.072.054c.036.036.064.072.073.081.009.01.009.018.018.027a.793.793 0 01.054.09c.045.081.072.126.072.126.108.208.216.451.324.74.109.288.226.595.334.92.027.072.045.135.072.207.063.19.144.424.235.694.378-.072.739-.144 1.09-.207.352-.063.668-.108.956-.135.289-.028.532-.046.74-.037.117 0 .207.01.288.028.018 0 .045.009.063.009-.171-.478-.351-1.01-.559-1.578l-1.73-4.914zm2.065 7.294a9.522 9.522 0 01-.758.243c-.054.018-.108.027-.153.046-.045.009-.09.027-.135.036a5.63 5.63 0 01-.379.09 3.78 3.78 0 01-.216.054h-.01c-.216.054-.504.117-.838.19.072.252.163.531.27.847.1.315.2.622.28.91.027.09.045.172.072.262.046.135.082.27.109.433.009.027.009.054.018.08.036.145.045.253.036.334 0 0 .378-.072.568-.117a10.969 10.969 0 001.722-3.2c-.054-.163-.108-.316-.162-.479-.082.109-.217.19-.424.271zM13.971 5.316h.036c.036 0 .082.018.136.054.027.018.063.036.09.063a.953.953 0 01.108.09c.162.144.343.316.55.523.198.198.406.415.622.65.207.224.397.432.568.603.081-.081.162-.171.244-.27.099-.109.198-.217.297-.334.1-.108.198-.225.307-.325.099-.108.198-.207.297-.306l.144-.144c.055-.054.109-.1.154-.145.09-.08.171-.153.252-.216.172-.144.298-.207.397-.207.036 0 .072.009.108.018l-.099-.118-.262-.054c-.009 0-.018 0-.027-.009-.08-.018-.162-.027-.243-.036h-.018c-.081-.009-.171-.027-.252-.036h-.01c-.45-.054-.91-.09-1.379-.09h-.253c-.08 0-.153.01-.225.01h-.027c-.081 0-.153.008-.234.017h-.01c-.414.027-.82.081-1.217.153-.036.036-.063.073-.099.118.018 0 .027-.01.045-.01zm-6.185 5.13c.045-.036.1-.09.19-.126a.898.898 0 01.333-.081c.153-.01.27.036.334.054 1.433-1.614 2.867-3.22 4.3-4.833l-.351.108c-.803.27-1.867.721-2.976 1.515a11.395 11.395 0 00-2.524 2.524c-.072.109-.153.208-.226.316.307.171.614.352.92.523zm-.234 1.073a.835.835 0 01-.1-.397v-.063s.01-.045.01-.063l-.93-.523a10.904 10.904 0 00-1.496 5.103v.758c.027.847.144 1.668.352 2.452.802-2.326 1.614-4.643 2.416-6.97a.906.906 0 01-.252-.297zm10.946-5.635a.672.672 0 01-.09.18 3.78 3.78 0 01-.199.325c-.045.063-.09.135-.135.207a9.503 9.503 0 01-.37.505c-.063.072-.117.153-.18.234-.01.01-.018.027-.027.036-.117.145-.244.298-.379.451-.1.117-.19.226-.298.343.136.153.289.315.442.496.054.054.108.117.154.18.108.117.207.234.306.352l.289.342c.18.226.333.424.46.604.108.163.162.28.18.37v.036c0 .09-.045.18-.126.262h4.31a.848.848 0 01.108-.199l-4.41-4.95v.018a.52.52 0 01-.035.208zm2.587.396c-.018-.009-.027-.018-.045-.018a4.68 4.68 0 00-.37-.18.145.145 0 01-.063-.036 14.088 14.088 0 00-.36-.162c-.027-.01-.045-.018-.072-.027a5.173 5.173 0 00-.397-.154c-.018-.009-.036-.009-.054-.018-.135-.054-.28-.099-.424-.144 1.398 1.569 2.795 3.147 4.202 4.716.018 0 .045-.01.063-.01h.189c.045.01.126.019.226.055.009 0 .018.009.027.018.009.009.027.009.036.018a.988.988 0 01.189.126c.009 0 .009.009.018.009.027.018.045.045.063.063.298-.171.595-.334.884-.505a11.117 11.117 0 00-3.715-3.525h-.009c-.126-.081-.262-.154-.388-.226zm-3.381 4.4c-.045-.036-.081-.072-.126-.108l-.28-.252-.144-.145a8.05 8.05 0 01-.46-.486c-.108-.118-.207-.235-.306-.343-.1-.117-.208-.226-.307-.334-.333.343-.613.64-.847.893-.054.054-.109.117-.163.171l-.018.018c-.108.108-.198.208-.288.298l-.126.126a3.952 3.952 0 01-.343.298h3.561c-.009-.01-.027-.018-.036-.027-.036-.046-.08-.073-.117-.109zm-8.547.127h4.454c-.018-.018-.036-.046-.054-.064-.018-.018-.027-.045-.037-.063-.018-.045-.036-.09-.036-.135 0-.027.01-.063.018-.108 0-.01.01-.018.01-.027.008-.018.018-.045.036-.072.027-.054.063-.118.108-.18.009-.01.009-.019.018-.019a12.153 12.153 0 01.874-1.09 3.59 3.59 0 01.18-.199c.064-.063.118-.135.181-.198.135-.154.27-.307.388-.451.009-.01.018-.018.018-.027a39.364 39.364 0 01-.965-1.163c-.09-.118-.171-.235-.252-.343a6.483 6.483 0 01-.37-.586l-.054-.108c-.018-.036-.027-.072-.045-.1-.018-.063-.036-.117-.036-.162L9.12 10.725c.01.027.028.055.037.082zm7.249 16.148a10.93 10.93 0 007.574-3.444c-2.525.559-5.05 1.118-7.574 1.668v1.776zm10.441-9.341c.009-.036.009-.063.018-.1.009-.09.027-.17.036-.26v-.01l.027-.28c0-.026.009-.053.009-.08 0-.054.009-.1.009-.154.018-.28.027-.54.027-.784a10.968 10.968 0 00-1.1-4.734l-.027-.054c-.036-.081-.081-.153-.117-.234l-.054-.108c-.045-.082-.09-.172-.136-.253-.333.19-.658.37-.991.56 0 .026 0 .053-.01.08-.008.054-.018.1-.027.145-.009.027-.018.045-.027.072a.933.933 0 01-.099.189c-.018.018-.027.036-.045.054.785 2.263 1.569 4.517 2.353 6.78.046-.189.082-.387.118-.577 0-.018.009-.036.009-.063a3.08 3.08 0 00.027-.19z" fill="#FFF" fill-rule="nonzero"/><path d="M16.045 24.214l-7.087-12.47 7.087 12.47 7.06-12.416-7.06 12.416z"/><path d="M22.843 11.438a.867.867 0 00.262.36l-7.06 12.416-7.087-12.47a.997.997 0 00.199-.306zm-7.132 8.142c-.124 0-.225.1-.225.225v.004c0 .11.069.197.165.222l.06.008a.223.223 0 00.226-.23v-.004a.225.225 0 00-.226-.225zm-1.901-2.22a.225.225 0 00-.209.141l-.008.024-.008.06c0 .127.099.226.225.226s.225-.099.225-.225-.099-.226-.225-.226zm3.616-4.436c-.451-.167-.718.015-.834.136l-.009.01a.387.387 0 00-.068.089c0 .009-.01.018 0 .018 0 .009.009.009.018.018.802.397 1.407.703 1.668.838l.027.018c.027.018.108.055.117.118.011.053-.023.107-.068.155l-.039.038-.046.041-.04.034c-.103.086-.241.198-.997.787a.324.324 0 01-.108.072.293.293 0 01-.126.036h-.027c-.045 0-.082 0-.235-.063a.443.443 0 00-.207-.027l-.09.027c-.018.009-.027.018-.045.027a.322.322 0 01-.026.022l.017-.013a.402.402 0 00-.064.054c-.009.009-.009.018-.009.027.014 0 .023 0 .03.004l.003.008.013.006c.018 0 .027 0 .045.009a.13.13 0 01.063.018 1.028 1.028 0 01.21.116l-.048-.035a.955.955 0 01.108.09.955.955 0 01.09.108l.082.118.072.099a.521.521 0 01.045.126.686.686 0 01.027.19v.108c0 .009 0 .018.009.027l.004.002.005.007h.027c.027-.018.054-.027.072-.045.009-.018.027-.027.036-.036a.14.14 0 00.054-.073c.036-.08.036-.162.036-.207-.018-.171 0-.207.018-.243 0-.01.01-.018.01-.027a.324.324 0 01.071-.109.955.955 0 01.109-.09 22.98 22.98 0 011.029-.7l.062-.04c.08-.044.198-.125.28-.08a.121.121 0 01.029.024c.024.039.036.094.042.12l.01.045c.053.316.162.965.297 1.83 0 .01.009.018.009.018.001.006.003.01.009.01.009.008.009.008.018.008s.523-.117.487-.793l-.072-1.614v-.04a.543.543 0 01.225-.429l.487-.387s.297-.208.243-.532c-.009-.01-.009-.018-.018-.018l.007.004c-.007-.011-.011-.014-.016-.014-.297-.153-.577.073-.577.073l-.523.351a.512.512 0 01-.514.072l-.487-.17zm-4.058.541a.226.226 0 00-.225.226v.004c0 .11.069.196.165.222l.06.008a.223.223 0 00.226-.23v-.004a.226.226 0 00-.226-.226zm1.704-1.127a.226.226 0 00-.225.226v.004c0 .11.069.196.165.222l.06.008a.223.223 0 00.226-.23v-.004a.226.226 0 00-.226-.226zm-4.12 0a.226.226 0 00-.226.226l.001.004c0 .11.068.196.164.222l.06.008a.223.223 0 00.226-.23v-.004c0-.125-.1-.226-.225-.226zM8.03 22.492c.036-.172.08-.352.135-.56l.054-.216c.081-.288.171-.595.28-.91.026-.081.053-.154.071-.226.046-.144.09-.288.136-.423a1.51 1.51 0 01.063-.19c-.244-.054-.532-.126-.839-.19a18.805 18.805 0 01-.901-.225c-.217-.063-.415-.117-.586-.18-.063-.018-.118-.045-.172-.063a1.985 1.985 0 01-.189-.081.89.89 0 01-.135-.081c-.081.225-.154.45-.235.676.388 1.037.92 1.993 1.587 2.858.235.054.46.1.694.153a1.3 1.3 0 01.037-.342zM6.172 18.48c.072-.01.144-.019.235-.019.207 0 .45.01.73.037.288.027.604.072.947.135.351.063.712.126 1.082.207.099-.28.198-.577.306-.901a20.2 20.2 0 01.496-1.308 6.19 6.19 0 01.162-.342c.036-.082.072-.145.109-.199a.88.88 0 01.099-.126.274.274 0 01.063-.045.254.254 0 01.135-.036L8.4 12.069l-2.227 6.41zm5.671 2.127c-.072-.018-.153-.027-.225-.045a11.365 11.365 0 01-.478-.099l-.243-.054c-.334-.072-.64-.135-.929-.19-.063.181-.126.352-.198.533a8.394 8.394 0 01-.199.505c-.063.162-.126.315-.189.468a9.247 9.247 0 01-.19.415 6.66 6.66 0 01-.351.65.857.857 0 01-.135.189l6.744 1.487-2.245-3.85-.036.036a.189.189 0 01-.054.037c-.081.045-.235.054-.47.036a8.8 8.8 0 01-.576-.082c-.081-.009-.153-.027-.226-.036zm-.847-3.615c-.018.09-.045.19-.072.297l-.054.217c-.063.216-.127.442-.208.676a9.465 9.465 0 00-.153.469c-.054.153-.1.306-.153.45.243.064.478.118.685.172.108.027.207.054.307.072.099.027.189.045.279.072.045.01.09.018.126.036l.127.027c.08.018.153.036.225.063.144.037.28.073.388.109.108.027.198.063.28.09l-1.714-3.012a1.855 1.855 0 00-.063.262zm-1.091 8.124c.18.117.37.234.577.351.559.325 1.091.568 1.569.758.135.054.27.108.424.162a11 11 0 003.282.577v-1.776c-2.597-.568-5.185-1.145-7.782-1.713a11.984 11.984 0 001.93 1.64z" fill="#FFF" fill-rule="nonzero"/></g>`;
  }
};
export default Arnx;
