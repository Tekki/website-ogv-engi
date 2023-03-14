var codes = {
  bestellung: "hBumOOqEuUrjo/uMawS8RuCz5oGAEq9ImC/jtfmWx1/Ymf+MnSipR8ddZwKxToIOlFd+PJs26HWpNaZB9YmjN+l0qjyRKg==",
  mitglied: "wFfabHUPgBFnJ/aH4nuLFe/CtlGFF+N8pDt8TqNAawOkZaAthA9qCIshwFuWM+dzcTRTBvuS3mqgOZMn3HPjfrhUyFX8mcBYr06dN/J+dFSGN/637pg=",
  verein: "hx6bLZErpDVREdFiuFGxO+O2zmnZa5Yv0GfXqdBt2HA="
};
function decrypt(code) {
  var encrypted = atob(codes[code]);
  var decrypted = new String;
  for (i = 0; i < encrypted.length; i = i + 2) {
    decrypted += String.fromCharCode(encrypted.charCodeAt(i) - encrypted.charCodeAt(i+1));
  }
  return decrypted;
}
function sendmail(field, code) {
    address = decrypt(code);
    field.location = "mailto:" + address;
}
