export default MobileNumberFormatter = (value, pattern) => {
    var i = 0,
      phone = value.toString();
    return pattern.replace(/#/g, _ => phone[i++]);
  }