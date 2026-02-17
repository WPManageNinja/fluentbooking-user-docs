# Documentation Images

Images used in the FluentBooking docs are organized here for easy management.

## Folder structure

```
images/
├── getting-started/          # Category
│   ├── install-activate-and-update-fluentbooking/
│   ├── add-your-booking-form-to-the-wordpress-sites-front-end/
│   └── ...
├── host-events/
│   ├── how-to-create-a-new-host/
│   └── ...
├── bookings/
├── integrations/
├── payments/
├── global-settings/
├── availability/
└── miscellaneous/
```

- **Category folder** = matches the docs section (e.g. `getting-started`, `host-events`).
- **Page folder** = one folder per doc, named after the doc slug (filename without `.md`).
- **Images** = all images for that doc live inside its page folder.

## Importing images

To download all images from the live docs and update markdown to use local paths, run from the project root:

```bash
python3 scripts/import_docs_images.py
```

Requires network access. Existing files are skipped so you can re-run safely.
