import { NextApiHandler } from 'next';
import type { FC } from 'react';
import { renderToString } from 'react-dom/server';

const handler: NextApiHandler = async (req, res) => {
  const name = req.query.name as string;

  const iconLib = await import('react-icons/fa');

  const Icon = iconLib[name as keyof typeof iconLib] as FC;

  if (!Icon) {
    res.status(404).end();
    return;
  }

  const html = renderToString(<Icon />);

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'max-age=31536000, immutable');
  res.status(200).send(html);
};

export default handler;
