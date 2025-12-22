'use client';

import { Container, Divider, Stack, Typography } from '@mui/material';
import FullScreenSection from '../FullScreenSection';

export default function PrivacyPolicyPage() {
  return (
    <FullScreenSection>
      <Container maxWidth="md" sx={{ py: 2, textAlign: 'left' }}>
        <Stack spacing={4}>
          {/* Header */}
          <Stack spacing={1}>
            <Typography variant="h4" component="h1" fontWeight={600}>
              Website Privacy Policy
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
            <strong>Koalaty Speech and Feeding Therapy Services LLC</strong>{' '}
            ("we," "our," or "us") is committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, and protect your
            information when you visit{' '}
            <strong>koalatyspeechandfeeding.com</strong>.
          </Typography>

          {/* Information We Collect */}
          <Stack spacing={1.5}>
            <Typography variant="h6">Information We Collect</Typography>

            <Typography variant="body1">
              We may collect personal information, including:
            </Typography>

            <ul>
              <li>
                <Typography variant="body1">
                  Name, email address, and phone number (when submitted through
                  contact forms)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Payment information (when purchasing services)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  IP address, browser type, and device data (for website
                  analytics)
                </Typography>
              </li>
            </ul>
          </Stack>

          {/* How We Use Your Information */}
          <Stack spacing={1.5}>
            <Typography variant="h6">How We Use Your Information</Typography>

            <ul>
              <li>
                <Typography variant="body1">
                  To provide and improve our services
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  To communicate with you (appointment reminders and responses
                  to inquiries)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  To process transactions securely
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  To comply with legal requirements
                </Typography>
              </li>
            </ul>
          </Stack>

          {/* Cookies */}
          <Stack spacing={1.5}>
            <Typography variant="h6">
              Cookies and Tracking Technologies
            </Typography>

            <Typography variant="body1">
              We may use cookies and similar tracking technologies to enhance
              user experience and analyze website performance. You can control
              cookie settings through your browser preferences.
            </Typography>
          </Stack>

          {/* Third-Party Sharing */}
          <Stack spacing={1.5}>
            <Typography variant="h6">Third-Party Sharing</Typography>

            <Typography variant="body1">
              We do not sell, trade, or rent your personal information. We may
              share your data with:
            </Typography>

            <ul>
              <li>
                <Typography variant="body1">
                  Service providers (such as payment processors and scheduling
                  software)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Legal authorities when required by law
                </Typography>
              </li>
            </ul>
          </Stack>

          {/* Data Security */}
          <Stack spacing={1.5}>
            <Typography variant="h6">Data Security</Typography>

            <Typography variant="body1">
              We implement reasonable security measures to protect your personal
              information. However, no online transmission is 100% secure.
            </Typography>
          </Stack>

          {/* Your Rights */}
          <Stack spacing={1.5}>
            <Typography variant="h6">Your Rights</Typography>

            <Typography variant="body1">
              Depending on your location, you may have the right to:
            </Typography>

            <ul>
              <li>
                <Typography variant="body1">
                  Access, update, or delete your personal information
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Opt out of marketing communications
                </Typography>
              </li>
            </ul>
          </Stack>

          {/* Contact */}
          <Stack spacing={1.5}>
            <Typography variant="h6">Contact Us</Typography>

            <Typography variant="body1">
              If you have questions about this Privacy Policy, please contact us
              at:
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
