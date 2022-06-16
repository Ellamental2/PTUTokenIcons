Hooks.on('renderTokenHUD', _addMovementIcons);

function _addMovementIcons(app, html, data) {
    // Fetch Actor
    const actor = game.actors.get(data.actorId);
    if(actor === undefined) return;

    // Ownership of actor does not need to be checked; token HUD only shows if you have control of said token.
    
    // List of capabilities to possibly display, and the icon it should use
    const capabilitiesMap = {
        Overland: "fas fa-shoe-prints",
        Swim: "fas fa-swimmer",
        Burrow: "fas fa-shovel",
        Sky: "fas fa-feather",
        Levitate: "fab fa-fly",
    }

    const buttons = [];
    for(const [cap,fac] of Object.entries(capabilitiesMap)) {
        const val = actor.data.data.capabilities[cap];
        // If value is 0 / unset no need to display.
        if(!val) continue;
        
        buttons.push(`<div class="control-icon chalk-icon" title="${cap}: ${val}"><i class="${fac}"></i>${val}</div>`)
    }

    html.find(".col.middle").before( // if the actor uses a 2nd bar increase height.
        `<div class="col middle" style="top: -${html.find(".bar2").html().trim() ? 105 : 90}px;">
            <div class="chalk-container">
                ${buttons.join("\n")}
            </div>
        </div>`
    )

}
