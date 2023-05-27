import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import { setupStudyTrackerController } from '../../../../api/controllers/studyController';

export default withIronSessionApiRoute(setupStudyTrackerRoute, sessionOptions);

function setupStudyTrackerRoute(req: NextApiRequest, res: NextApiResponse) {
  return setupStudyTrackerController(req, res);
}