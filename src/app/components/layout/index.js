/**
 * Created by sebastiann on 2017/06/23.
 */

/* eslint-disable no-unused-vars */

import React from 'react';
import lifecycle from 'shared/utils/lifecycle';
import { default as Layout } from './layout';

const willMount = () => {};

export default lifecycle({ willMount })(Layout);
