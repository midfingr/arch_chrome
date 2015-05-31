# arch_chrome
Test build. Work in progress.

ob-session initial release, June 2015

(64-bit) only

- login password: guest
- root password: root

**************************************************
Quick install.
- open gparted (right click menu, system tools)
- create new parition table (mdos)
- add new partition, ext4
- apply and exit
**************************************************
- open a terminal (ctrl+alt+t)
- type: su (root pass)
- mount /dev/sda1 (for example)
- type: ame (wait)
- at the root prompt:
mkinitcpio -p linux (press enter)
grub-install /dev/sda (press enter)
up-grub (press enter)
- type: q (press enter)
- type reboot (press enter)
**************************************************

Notes.
- x86_64 (64-bit) only
- compiled using 'archiso'
- source code (incomplete)

Keyboard Shortcuts:
- ctrl+alt+t = terminal
- alt+h = file manager (Thunar)
- ctrl+space = synapse (program launcher/search)
- ctrl+m = desktop menu
- ctrl+alt+n = text editor (leafpad)

Avatar:
- right click power menu (bottom right)
- choose 'Change Avatar'
- click on the picture
- browse computer: /usr/share/chome-avatars (typo)


TODO.
- clean up right click 'App' menu
- add qt program appearance support
- tweak composite
- add documentation
- fix spelling errors, typos

Credits.
Inspired by Chromixium
Manjaro Linux
XFCE
LXDE
Openbox
Arch Linux AUR
Gnome
Chromium
