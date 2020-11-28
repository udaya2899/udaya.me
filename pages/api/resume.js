// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export default (req, res) => {
  console.log({ __dirname });
  var data = fs.readFileSync('./public/assets/Udaya_Prakash_N_Resume.pdf');
  res.status(200);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    'attachment; filename=' + 'Udaya_Prakash_N_Resume.pdf'
  );
  res.send(data);
};
