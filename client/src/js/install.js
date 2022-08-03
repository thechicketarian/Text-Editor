const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    event.preventDefault();
    window.deferredPrompt = event;
    console.log('yes', 'beforeinstallprompt', event);
    butInstall.classList.toggle('hidden',false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    console.log('yes','butInstall-clicked');

    if(!promptEvent){
        return;
    }

    promptEvent.prompt();

    //reset the deferred prompt variable
    window.deferredPrompt = null;

    //hides the install button
    butInstall.classList.toggle('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('yes', 'appinstalled', event)

    window.deferredPrompt = null;
});
