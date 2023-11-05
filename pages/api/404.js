module.exports = (req, res) => {
  res.status(404).json({ "success": false, message: 'Sunucularımızda yoğunluk var. Lütfen daha sonra tekrar deneyin veya @Liiuqa ile iletişime geçiniz.' });
};