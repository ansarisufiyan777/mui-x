function showError(message: string[]) {
  console.error(
    [
      '************************************************************',
      '*************************************************************',
      '',
      ...message,
      '',
      '*************************************************************',
      '*************************************************************',
    ].join('\n'),
  );
}

export function showInvalidLicenseError() {
  showError([
    'MUI: Invalid license key.',
    '',
    'Your MUI X license key isn't valid. Please check',
    'your license key, or visit',
    'https://mui.com/r/x-get-license to get a valid license.',
  ]);
}

export function showNotFoundLicenseError() {
  showError([
    'MUI: License key not found.',
    '',
    'This is a trial-only version of MUI X.',
    'While all the features are unlocked, it is not licensed for',
    'development use in projects intended for production.',
    '',
    'To purchase a license, please visit',
    'https://mui.com/r/x-get-license.',
  ]);
}

export function showExpiredLicenseError() {
  showError([
    'MUI: License key expired.',
    '',
    'Please visit https://mui.com/r/x-get-license to renew',
    'your subscription and get the latest version of MUI X.',
  ]);
}
