// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import path from 'path';

export default (req, res) => {
  var data = fs.readFileSync(
    path.resolve('./public/assets/Udaya_Prakash_N_Resume.pdf')
  );

  res.status(200);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    'attachment; filename=' + 'Udaya_Prakash_N_Resume.pdf'
  );
  res.send(data);
};
