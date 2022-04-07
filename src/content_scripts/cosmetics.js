/**
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2017-present Ghostery GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */
import { injectCosmetics } from '@cliqz/adblocker-webextension-cosmetics';

injectCosmetics(window);

function check() {
  console.log('PCN: sending message...');
  chrome.runtime.sendMessage('test', (response) => {
    if (chrome.runtime.lastError) {
      console.log('PCN: error in handler...', chrome.runtime.lastError);
      return;
    }
    console.log('PCN: got response...', response);
  });
}
check();

const HOUR = 60 * 60 * 1000;
setInterval(check, HOUR);
