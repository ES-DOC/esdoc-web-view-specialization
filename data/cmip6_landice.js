(function (APP) {

    // ECMAScript 5 Strict Mode
    "use strict";

    // Register with application.
    APP.registerTopic({"id": "cmip6.landice", "label": "Landice", "description": "Land Ice Realm", "contact": "David Hassell", "project": "cmip6", "shortTables": [], "subTopics": [{"id": "cmip6.landice.grid", "label": "Grid", "description": "Land ice grid", "properties": [{"id": "cmip6.landice.grid.adaptive_grid", "label": "Adaptive Grid", "description": "Is an adative grid being used?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.landice.grid.base_resolution", "label": "Base Resolution", "description": "The base resolution (in metres), before any adaption", "cardinality": "1.1", "type": "float"}, {"id": "cmip6.landice.grid.resolution_limit", "label": "Resolution Limit", "description": "If an adaptive grid is being used, what is the limit of the resolution (in metres)", "cardinality": "0.1", "type": "float"}, {"id": "cmip6.landice.grid.projection", "label": "Projection", "description": "The projection of the land ice grid (e.g. albers_equal_area)", "cardinality": "1.1", "type": "str"}]}, {"id": "cmip6.landice.key_properties", "label": "Key Properties", "description": "Land ice key properties", "properties": [{"id": "cmip6.landice.key_properties.model_name", "label": "Model Name", "description": "Name of land surface model code", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.landice.key_properties.ice_albedo", "label": "Ice Albedo", "description": "Specify how ice albedo is modelled", "cardinality": "1.N", "type": "enum", "enum": {"id": "Specify how ice albedo is modelled", "label": "Ice Albedo Methods", "description": "Specify how ice albedo is modelled", "is_open": true, "choices": [{"description": null, "value": "prescribed"}, {"description": null, "value": "function of ice age"}, {"description": null, "value": "function of ice density"}]}}, {"id": "cmip6.landice.key_properties.atmospheric_coupling_variables", "label": "Atmospheric Coupling Variables", "description": "Which variables are passed between the atmosphere and ice (e.g. orography, ice mass)", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.landice.key_properties.oceanic_coupling_variables", "label": "Oceanic Coupling Variables", "description": "Which variables are passed between the ocean and ice", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.landice.key_properties.prognostic_variables", "label": "Prognostic Variables", "description": "Which variables are prognostically calculated in the ice model", "cardinality": "1.N", "type": "enum", "enum": {"id": "Which variables are prognostically calculated in the ice model", "label": "Prognostic Variable Types", "description": "Which variables are prognostically calculated in the ice model", "is_open": true, "choices": [{"description": null, "value": "ice velocity"}, {"description": null, "value": "ice thickness"}, {"description": null, "value": "ice temperature"}]}}]}, {"id": "cmip6.landice.glaciers", "label": "Glaciers", "description": "Land ice glaciers", "properties": [{"id": "cmip6.landice.glaciers.description", "label": "Description", "description": "Describe the treatment of glaciers, if any", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.landice.glaciers.dynamic_areal_extent", "label": "Dynamic Areal Extent", "description": "Does the model include a dynamic glacial extent?", "cardinality": "0.1", "type": "bool"}]}, {"id": "cmip6.landice.ice", "label": "Ice", "description": "Ice sheet and ice shelf", "properties": [{"id": "cmip6.landice.ice.grounding_line_method", "label": "Grounding Line Method", "description": "Specify the technique used for modelling the grounding line in the ice sheet-ice shelf coupling", "cardinality": "1.1", "type": "enum", "enum": {"id": "Specify the technique used for modelling the grounding line in the ice sheet-ice shelf coupling", "label": "Grounding Line Methods", "description": "Specify the technique used for modelling the grounding line in the ice sheet-ice shelf coupling", "is_open": true, "choices": [{"description": null, "value": "grounding line prescribed"}, {"description": null, "value": "flux prescribed (Schoof)"}, {"description": null, "value": "fixed grid size"}, {"description": null, "value": "moving grid"}]}}, {"id": "cmip6.landice.ice.ice_sheet", "label": "Ice Sheet", "description": "Are ice sheets simulated?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.landice.ice.ice_shelf", "label": "Ice Shelf", "description": "Are ice shelves simulated?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.landice.ice.mass_balance.basal.bedrock", "label": "Mass Balance > Basal > Bedrock", "description": "Describe the implementation of basal melting over bedrock", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.landice.ice.mass_balance.basal.ocean", "label": "Mass Balance > Basal > Ocean", "description": "Describe the implementation of basal melting over the ocean", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.landice.ice.mass_balance.frontal.calving", "label": "Mass Balance > Frontal > Calving", "description": "Describe the implementation of calving from the front of the ice shelf", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.landice.ice.mass_balance.frontal.melting", "label": "Mass Balance > Frontal > Melting", "description": "Describe the implementation of melting from the front of the ice shelf", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.landice.ice.dynamics.description", "label": "Dynamics > Description", "description": "General description if ice sheet and ice shelf dynamics", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.landice.ice.dynamics.approximation", "label": "Dynamics > Approximation", "description": "Approximation type used in modelling ice dynamics", "cardinality": "1.N", "type": "enum", "enum": {"id": "Approximation type used in modelling ice sheet dynamics", "label": "Approximation Types", "description": "Approximation type used in modelling ice sheet dynamics", "is_open": true, "choices": [{"description": null, "value": "SIA"}, {"description": null, "value": "SAA"}, {"description": null, "value": "full stokes"}]}}, {"id": "cmip6.landice.ice.dynamics.timestep", "label": "Dynamics > Timestep", "description": "Timestep (in seconds) of the ice scheme", "cardinality": "1.1", "type": "int"}]}]});

}(this.APP));