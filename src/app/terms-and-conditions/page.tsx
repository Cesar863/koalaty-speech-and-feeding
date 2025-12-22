'use client';

import { Container, Divider, Stack, Typography } from '@mui/material';
import FullScreenSection from '../FullScreenSection';

export default function TermsAndConditionsPage() {
  return (
    <FullScreenSection>
      <Container maxWidth="md" sx={{ py: 2, textAlign: 'left' }}>
        <Stack spacing={4}>
          {/* Header */}
          <Stack spacing={1}>
            <Typography variant="h4" component="h1" fontWeight={600}>
              Website Terms and Conditions
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Effective Date: May 20, 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last Updated: May 20, 2024
            </Typography>
          </Stack>

          <Divider />

          {/* Intro */}
          <Typography variant="body1">
            Welcome to <strong>koalatyspeechandfeeding.com</strong>. By
            accessing or using this website, you agree to be bound by these
            Terms and Conditions. If you do not agree with these terms, please
            do not use this website.
          </Typography>

          {/* Use of Website */}
          <Stack spacing={1.5}>
            <Typography variant="h6">Use of Website</Typography>

            <ul>
              <li>
                <Typography variant="body1">
                  You agree to use this website only for lawful purposes.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Unauthorized use of this website, including hacking, data
                  mining, or attempting to gain unauthorized access, is strictly
                  prohibited.
                </Typography>
              </li>
            </ul>
          </Stack>

          {/* Intellectual Property */}
          <Stack spacing={1.5}>
            <Typography variant="h6">Intellectual Property</Typography>

            <Typography variant="body1">
              All content on this website, including text, graphics, logos, and
              other materials, is the property of{' '}
              <strong>Koalaty Speech and Feeding Therapy Services LLC</strong>{' '}
              and is protected by applicable copyright and intellectual property
              laws.
            </Typography>

            <Typography variant="body1">
              Content may not be copied, reproduced, distributed, or used
              without prior written permission.
            </Typography>
          </Stack>

          {/* Disclaimer */}
          <Stack spacing={1.5}>
            <Typography variant="h6">Disclaimer</Typography>

            <Typography variant="body1">
              The information provided on this website is for educational and
              informational purposes only and does not constitute professional
              advice.
            </Typography>

            <Typography variant="body1">
              Always consult a qualified professional for medical,
              speech-language, feeding, or occupational therapy concerns.
            </Typography>
          </Stack>

          {/* Limitation of Liability */}
          <Stack spacing={1.5}>
            <Typography variant="h6">Limitation of Liability</Typography>

            <Typography variant="body1">
              Koalaty Speech and Feeding Therapy Services LLC shall not be held
              liable for any direct, indirect, incidental, or consequential
              damages arising out of or related to the use of this website.
            </Typography>
          </Stack>

          {/* Changes to Terms */}
          <Stack spacing={1.5}>
            <Typography variant="h6">Changes to These Terms</Typography>

            <Typography variant="body1">
              We reserve the right to update or modify these Terms and
              Conditions at any time. Continued use of this website after
              changes are posted constitutes acceptance of the updated terms.
            </Typography>
          </Stack>

          {/* Contact */}
          <Stack spacing={1.5}>
            <Typography variant="h6">Contact Us</Typography>

            <Typography variant="body1">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </Typography>

            <Typography variant="body1" fontWeight={500}>
              charity.bobo@koalatyspeechandfeeding.com
            </Typography>

            <Typography variant="body1">Phone: (863) 225-0797</Typography>
          </Stack>
        </Stack>
      </Container>
    </FullScreenSection>
  );
}
