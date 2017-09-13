(function (APP) {

    // ECMAScript 5 Strict Mode
    "use strict";

    // Register with application.
    APP.registerTopic({"id": "cmip6.seaice", "label": "Seaice", "description": "Sea ice realm specialization", "contact": "Ruth Petrie", "authors": ["Ruth Petrie", "Bryan Lawrence", "David Hassell", "Mark Greenslade"], "contributors": ["Jamie Rae (UKMO)", "Martin Vancopppenolle (IPSL)", "Alexandra Jahn (University of Colorado)"], "project": "cmip6", "changeHistory": [{"note": "Initialised", "date": "2016-05-24", "version": "0.1.0", "author": "David Hassell"}, {"note": "Modified to include work done by Bryan Lawerence", "date": "2016-09-28", "version": "0.1.1", "author": "Ruth Petrie"}, {"note": "Updated on the basis of discussion with Jamie Rae (UKMO)", "date": "2016-11-07", "version": "0.1.2", "author": "Ruth Petrie"}, {"note": "Refactored based to fit in the new schema", "date": "2016-11-15", "version": "0.1.3", "author": "Mark Greenslade"}, {"note": "Update DETAILS and SUBPROCESS names", "date": "2016-11-17", "version": "0.1.4", "author": "Ruth Petrie"}, {"note": "Update based on discussions with Martin Vancopppenolle (IPSL)", "date": "2016-11-18", "version": "0.1.5", "author": "Ruth Petrie"}, {"note": "Update based on discussions with Alexandra Jahn (University of Colorado)", "date": "2016-11-23", "version": "0.1.6", "author": "Ruth Petrie"}], "qcStatus": "draft", "shortTables": [{"id": "seaice", "label": "Main", "properties": [{"priority": 1, "id": "cmip6.seaice.key_properties.model.model_name"}, {"priority": 1, "id": "cmip6.seaice.key_properties.resolution.name"}, {"priority": 1, "id": "cmip6.seaice.key_properties.resolution.canonical_horizontal_resolution"}, {"priority": 1, "id": "cmip6.seaice.grid.discretisation.horizontal.grid_type"}, {"priority": 1, "id": "cmip6.seaice.grid.discretisation.vertical.layering"}, {"priority": 1, "id": "cmip6.seaice.grid.seaice_categories.ice_thickness_distribution_scheme"}, {"priority": 1, "id": "cmip6.seaice.dynamics.rheology"}, {"priority": 1, "id": "cmip6.seaice.thermodynamics.energy.enthalpy_formulation"}, {"priority": 1, "id": "cmip6.seaice.thermodynamics.salt.thermodynamics.salinity_type"}, {"priority": 1, "id": "cmip6.seaice.thermodynamics.melt_ponds.formulation"}, {"priority": 1, "id": "cmip6.seaice.radiative_processes.surface_albedo"}, {"priority": 1, "id": "cmip6.seaice.radiative_processes.ice_radiation_transmission"}]}], "subTopics": [{"id": "cmip6.seaice.key_properties", "label": "Key Properties", "description": "Sea Ice key properties", "contact": "Ruth Petrie", "properties": [{"id": "cmip6.seaice.key_properties.model.model_name", "label": "Model > Model Name", "description": "Name of seaice model (e.g. CICE 4.2, LIM 2.1, etc.)", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.key_properties.variables.prognostic", "label": "Variables > Prognostic", "description": "List of prognostic variables in the sea ice component.", "cardinality": "1.N", "type": "enum", "enum": {"id": "Prognostic variables in sea ice model", "label": "Prognostic Variables", "description": "Prognostic variables in sea ice model", "is_open": true, "choices": [{"description": null, "value": "Sea ice temperature"}, {"description": null, "value": "Sea ice concentration"}, {"description": null, "value": "Sea ice thickness"}, {"description": null, "value": "Sea ice volume per grid cell area"}, {"description": null, "value": "Sea ice u-velocity"}, {"description": null, "value": "Sea ice v-velocity"}, {"description": null, "value": "Sea ice enthalpy"}, {"description": null, "value": "Internal ice stress"}, {"description": null, "value": "Salinity"}, {"description": "Snow on ice temperature", "value": "Snow temperature"}, {"description": "Snow on ice thickness", "value": "Snow depth"}]}}, {"id": "cmip6.seaice.key_properties.seawater_properties.ocean_freezing_point", "label": "Seawater Properties > Ocean Freezing Point", "description": "Equation used to compute the freezing point (in deg C) of seawater, as a function of salinity and pressure", "cardinality": "1.1", "type": "enum", "enum": {"id": "Types of seawater freezing point equation in sea ice.", "label": "Seawater Freezing Point", "description": "Types of seawater freezing point equation in sea ice.", "is_open": true, "choices": [{"description": "Thermodynamic equation of seawater 2010", "value": "TEOS-10"}, {"description": "Constant value of seawater freezing point is used.", "value": "Constant"}]}}, {"id": "cmip6.seaice.key_properties.seawater_properties.ocean_freezing_point_value", "label": "Seawater Properties > Ocean Freezing Point Value", "description": "If using a constant seawater freezing point, specify this value.", "cardinality": "0.1", "type": "float"}, {"id": "cmip6.seaice.key_properties.resolution.name", "label": "Resolution > Name", "description": "This is a string usually used by the modelling group to describe the resolution of this grid e.g. N512L180, T512L70, ORCA025 etc.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.key_properties.resolution.canonical_horizontal_resolution", "label": "Resolution > Canonical Horizontal Resolution", "description": "Expression quoted for gross comparisons of resolution, eg. 50km or 0.1 degrees etc.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.key_properties.resolution.number_of_horizontal_gridpoints", "label": "Resolution > Number Of Horizontal Gridpoints", "description": "Total number of horizontal (XY) points (or degrees of freedom) on computational grid.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.seaice.key_properties.tuning_applied.description", "label": "Tuning Applied > Description", "description": "General overview description of tuning: explain and motivate the main targets and metrics retained.  Document the relative weight given to climate performance metrics versus process oriented metrics, and on the possible conflicts with parameterization level tuning. In particular describe any struggle with a parameter value that required pushing it to its limits to solve a particular model deficiency.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.key_properties.tuning_applied.target", "label": "Tuning Applied > Target", "description": "What was the aim of tuning, e.g. correct sea ice minima, correct seasonal cycle.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.key_properties.tuning_applied.simulations", "label": "Tuning Applied > Simulations", "description": "Which simulations had tuning applied, e.g. all, not historical, only pi-control? ", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.key_properties.tuning_applied.metrics_used", "label": "Tuning Applied > Metrics Used", "description": "List any observed metrics used in tuning model/parameters", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.key_properties.tuning_applied.variables", "label": "Tuning Applied > Variables", "description": "Which variables were changed during the tuning process?", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.seaice.key_properties.assumptions.description", "label": "Assumptions > Description", "description": "General overview description of any *key* assumptions made in this model.", "cardinality": "1.N", "type": "str"}, {"id": "cmip6.seaice.key_properties.assumptions.on_diagnostic_variables", "label": "Assumptions > On Diagnostic Variables", "description": "Note any assumptions that specifically affect the CMIP6 diagnostic sea ice variables.", "cardinality": "1.N", "type": "str"}, {"id": "cmip6.seaice.key_properties.assumptions.missing_processes", "label": "Assumptions > Missing Processes", "description": "List any *key* processes missing in this model configuration? Provide full details where this affects the CMIP6 diagnostic sea ice variables?", "cardinality": "1.N", "type": "str"}, {"id": "cmip6.seaice.key_properties.conservation.description", "label": "Conservation > Description", "description": "Provide a general description of conservation methodology.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.key_properties.conservation.properties", "label": "Conservation > Properties", "description": "Properties conserved in sea ice by the numerical schemes.", "cardinality": "1.N", "type": "enum", "enum": {"id": "List of properties that can be conserved in sea ice", "label": "Conserved Properties", "description": "List of properties that can be conserved in sea ice", "is_open": true, "choices": [{"description": null, "value": "Energy"}, {"description": null, "value": "Mass"}, {"description": null, "value": "Salt"}]}}, {"id": "cmip6.seaice.key_properties.conservation.budget", "label": "Conservation > Budget", "description": "For each conserved property, specify the output variables which close the related budgets.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.key_properties.conservation.was_flux_correction_used", "label": "Conservation > Was Flux Correction Used", "description": "Does conservation involved flux correction?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.seaice.key_properties.conservation.corrected_conserved_prognostic_variables", "label": "Conservation > Corrected Conserved Prognostic Variables", "description": "List any variables which are conserved by *more* than the numerical scheme alone.", "cardinality": "1.1", "type": "str"}]}, {"id": "cmip6.seaice.grid", "label": "Grid", "description": "Sea Ice grid", "contact": "Ruth Petrie", "properties": [{"id": "cmip6.seaice.grid.discretisation.horizontal.grid", "label": "Discretisation > Horizontal > Grid", "description": "Grid on which sea ice is horizontal discretised?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Grid which is the sea ice horizontally discretised on?", "label": "Horizontal Grid", "description": "Grid which is the sea ice horizontally discretised on?", "is_open": true, "choices": [{"description": "Sea ice is horizontally discretised on the ocean grid", "value": "Ocean grid"}, {"description": "Sea ice is horizontally discretised on the atmospheric grid", "value": "Atmosphere Grid"}, {"description": "Sea ice is horizontally discretised on its own independent grid", "value": "Own Grid"}]}}, {"id": "cmip6.seaice.grid.discretisation.horizontal.grid_type", "label": "Discretisation > Horizontal > Grid Type", "description": "What is the type of sea ice grid?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Grid structures", "label": "Grid Structure", "description": "Grid structures", "is_open": true, "choices": [{"description": null, "value": "Structured grid"}, {"description": null, "value": "Unstructured grid"}, {"description": "Computational grid changes during the run", "value": "Adaptive grid"}]}}, {"id": "cmip6.seaice.grid.discretisation.horizontal.scheme", "label": "Discretisation > Horizontal > Scheme", "description": "What is the advection scheme?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Numerical schemes", "label": "Numerical Scheme", "description": "Numerical schemes", "is_open": true, "choices": [{"description": null, "value": "Finite differences"}, {"description": null, "value": "Finite elements"}, {"description": null, "value": "Finite volumes"}]}}, {"id": "cmip6.seaice.grid.discretisation.horizontal.thermodynamics_time_step", "label": "Discretisation > Horizontal > Thermodynamics Time Step", "description": "What is the time step in the sea ice model thermodynamic component in seconds.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.seaice.grid.discretisation.horizontal.dynamics_time_step", "label": "Discretisation > Horizontal > Dynamics Time Step", "description": "What is the time step in the sea ice model dynamic component in seconds.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.seaice.grid.discretisation.horizontal.additional_details", "label": "Discretisation > Horizontal > Additional Details", "description": "Specify any additional horizontal discretisation details.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.seaice.grid.discretisation.vertical.layering", "label": "Discretisation > Vertical > Layering", "description": "What type of sea ice vertical layers are implemented for purposes of thermodynamic calculations?", "cardinality": "1.N", "type": "enum", "enum": {"id": "Sea ice layering types", "label": "Vertical Layering", "description": "Sea ice layering types", "is_open": true, "choices": [{"description": "Simulation has no internal ice thermodynamics.", "value": "Zero-layer"}, {"description": "Simulation uses two layers.", "value": "Two-layers"}, {"description": "Simulation uses more than two layers", "value": "Multi-layers"}]}}, {"id": "cmip6.seaice.grid.discretisation.vertical.number_of_layers", "label": "Discretisation > Vertical > Number Of Layers", "description": "If using multi-layers specify how many.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.seaice.grid.discretisation.vertical.additional_details", "label": "Discretisation > Vertical > Additional Details", "description": "Specify any additional vertical grid details.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.seaice.grid.seaice_categories.has_mulitple_categories", "label": "Seaice Categories > Has Mulitple Categories", "description": "Set to true if the sea ice model has multiple sea ice categories.", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.seaice.grid.seaice_categories.number_of_categories", "label": "Seaice Categories > Number Of Categories", "description": "If using sea ice categories specify how many.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.seaice.grid.seaice_categories.category_limits", "label": "Seaice Categories > Category Limits", "description": "If using sea ice categories specify each of the category limits.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.grid.seaice_categories.ice_thickness_distribution_scheme", "label": "Seaice Categories > Ice Thickness Distribution Scheme", "description": "Describe the sea ice thickness distribution scheme", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.grid.seaice_categories.other", "label": "Seaice Categories > Other", "description": "If the sea ice model does not use sea ice categories specify any additional details.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.seaice.grid.snow_on_seaice.has_snow_on_ice", "label": "Snow On Seaice > Has Snow On Ice", "description": "Is snow on ice represented in this model?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.seaice.grid.snow_on_seaice.number_of_snow_levels", "label": "Snow On Seaice > Number Of Snow Levels", "description": "Number of vertical levels of snow on ice?", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.seaice.grid.snow_on_seaice.snow_fraction", "label": "Snow On Seaice > Snow Fraction", "description": "Describe how the snow fraction on sea ice is determined", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.grid.snow_on_seaice.additional_details", "label": "Snow On Seaice > Additional Details", "description": "Specify any additional details related to snow on ice.", "cardinality": "0.1", "type": "str"}]}, {"id": "cmip6.seaice.dynamics", "label": "Dynamics", "description": "Sea Ice Dynamics", "contact": "Ruth Petrie", "properties": [{"id": "cmip6.seaice.dynamics.horizontal_transport", "label": "Horizontal Transport", "description": "What is the method of horizontal advection of sea ice?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Transport Methods", "label": "Transport Methods", "description": "Transport Methods", "is_open": true, "choices": [{"description": "(including Semi-Lagrangian)", "value": "Incremental Re-mapping"}, {"description": null, "value": "Prather"}, {"description": null, "value": "Eulerian"}]}}, {"id": "cmip6.seaice.dynamics.transport_in_thickness_space", "label": "Transport In Thickness Space", "description": "What is the method of sea ice transport in thickness space (i.e. in thickness categories)?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Transport Methods", "label": "Transport Methods", "description": "Transport Methods", "is_open": true, "choices": [{"description": "(including Semi-Lagrangian)", "value": "Incremental Re-mapping"}, {"description": null, "value": "Prather"}, {"description": null, "value": "Eulerian"}]}}, {"id": "cmip6.seaice.dynamics.ice_strength_formulation", "label": "Ice Strength Formulation", "description": "Which method of sea ice strength formulation is used?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Ice strength formulation methods", "label": "Ice Strength", "description": "Ice strength formulation methods", "is_open": true, "choices": [{"description": null, "value": "Hibler 1979"}, {"description": null, "value": "Rothrock 1975"}]}}, {"id": "cmip6.seaice.dynamics.redistribution", "label": "Redistribution", "description": "Which processes can redistribute sea ice?", "cardinality": "1.N", "type": "enum", "enum": {"id": "Sea Ice Redistribution types", "label": "Redistribution Types", "description": "Sea Ice Redistribution types", "is_open": true, "choices": [{"description": null, "value": "Rafting"}, {"description": null, "value": "Ridging"}]}}, {"id": "cmip6.seaice.dynamics.rheology", "label": "Rheology", "description": "Rheology, what is the ice deformation formulation?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Sea ice rheology types", "label": "Rheology Types", "description": "Sea ice rheology types", "is_open": true, "choices": [{"description": null, "value": "Free-drift"}, {"description": null, "value": "Mohr-Coloumb"}, {"description": "VP", "value": "Visco-plastic"}, {"description": "EVP", "value": "Elastic-visco-plastic"}, {"description": null, "value": "Elastic-aniostropic-plastic"}, {"description": null, "value": "Granular"}]}}]}, {"id": "cmip6.seaice.thermodynamics", "label": "Thermodynamics", "description": "Sea Ice Thermodynamics", "contact": "Ruth Petrie", "properties": [{"id": "cmip6.seaice.thermodynamics.energy.enthalpy_formulation", "label": "Energy > Enthalpy Formulation", "description": "What is the energy formulation?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Thermodynamic energy formulations", "label": "Energy Formulation", "description": "Thermodynamic energy formulations", "is_open": true, "choices": [{"description": null, "value": "Pure ice latent heat (Semtner 0-layer)"}, {"description": null, "value": "Pure ice latent and sensible heat"}, {"description": null, "value": "Pure ice latent and sensible heat + brine heat reservoir (Semtner 3-layer)"}, {"description": null, "value": "Pure ice latent and sensible heat + explicit brine inclusions (Bitz and Lipscomb)"}]}}, {"id": "cmip6.seaice.thermodynamics.energy.thermal_conductivity", "label": "Energy > Thermal Conductivity", "description": "What type of thermal conductivity is used?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Types of thermal conductivity", "label": "Thermal Conductivity Type", "description": "Types of thermal conductivity", "is_open": true, "choices": [{"description": null, "value": "Pure ice"}, {"description": null, "value": "Saline ice"}]}}, {"id": "cmip6.seaice.thermodynamics.energy.heat_diffusion", "label": "Energy > Heat Diffusion", "description": "What is the method of heat diffusion?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Heat diffusion types", "label": "Heat Diffusion Type", "description": "Heat diffusion types", "is_open": true, "choices": [{"description": null, "value": "Conduction fluxes"}, {"description": null, "value": "Conduction and radiation heat fluxes"}, {"description": null, "value": "Conduction, radiation and latent heat transport"}]}}, {"id": "cmip6.seaice.thermodynamics.energy.basal_heat_flux", "label": "Energy > Basal Heat Flux", "description": "Method by which basal ocean heat flux is handled?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Basal ocean heat flux methodology", "label": "Basal Heat Flux Method", "description": "Basal ocean heat flux methodology", "is_open": true, "choices": [{"description": "Brine inclusions treated as a heat reservoir", "value": "Heat Reservoir"}, {"description": "Thermal properties depend on S-T (with fixed salinity)", "value": "Thermal Fixed Salinity"}, {"description": "Thermal properties depend on S-T (with varying salinity", "value": "Thermal Varying Salinity"}]}}, {"id": "cmip6.seaice.thermodynamics.energy.fixed_salinity_value", "label": "Energy > Fixed Salinity Value", "description": "If you have selected {Thermal properties depend on S-T (with fixed salinity)}, supply fixed salinity value for each sea ice layer.", "cardinality": "0.1", "type": "float"}, {"id": "cmip6.seaice.thermodynamics.energy.heat_content_of_precipitation", "label": "Energy > Heat Content Of Precipitation", "description": "Describe the method by which the heat content of precipitation is handled.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.thermodynamics.mass.new_ice_formation", "label": "Mass > New Ice Formation", "description": "Describe the method by which new sea ice is formed in open water.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.thermodynamics.mass.ice_vertical_growth_and_melt", "label": "Mass > Ice Vertical Growth And Melt", "description": "Describe the method that governs the vertical growth and melt of sea ice.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.thermodynamics.mass.ice_lateral_melting", "label": "Mass > Ice Lateral Melting", "description": "What is the method of sea ice lateral melting?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Ice lateral melting methods", "label": "Lateral Melting Types", "description": "Ice lateral melting methods", "is_open": true, "choices": [{"description": null, "value": "Floe-size dependent (Bitz et al 2001)"}, {"description": null, "value": "Virtual thin ice melting (for single-category)"}]}}, {"id": "cmip6.seaice.thermodynamics.mass.ice_surface_sublimation", "label": "Mass > Ice Surface Sublimation", "description": "Describe the method that governs sea ice surface sublimation.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.thermodynamics.mass.frazil_ice", "label": "Mass > Frazil Ice", "description": "Describe the method of frazil ice formation.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.thermodynamics.salt.has_multiple_sea_ice_salinities", "label": "Salt > Has Multiple Sea Ice Salinities", "description": "Does the sea ice model use two different salinities: one for thermodynamic calculations; and one for the salt budget?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.seaice.thermodynamics.salt.sea_ice_salinity_thermal_impacts", "label": "Salt > Sea Ice Salinity Thermal Impacts", "description": "Does sea ice salinity impact the thermal properties of sea ice?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.seaice.thermodynamics.salt.mass_transport.salinity_type", "label": "Salt > Mass Transport > Salinity Type", "description": "How is salinity determined in the mass transport of salt calculation?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Method of describing the value of salinity", "label": "Salinity Method", "description": "Method of describing the value of salinity", "is_open": true, "choices": [{"description": null, "value": "Constant"}, {"description": null, "value": "Prescribed salinity profile"}, {"description": null, "value": "Prognostic salinity profile"}]}}, {"id": "cmip6.seaice.thermodynamics.salt.mass_transport.constant_salinity_value", "label": "Salt > Mass Transport > Constant Salinity Value", "description": "If using a constant salinity value specify this value in PSU?", "cardinality": "0.1", "type": "float"}, {"id": "cmip6.seaice.thermodynamics.salt.mass_transport.additional_details", "label": "Salt > Mass Transport > Additional Details", "description": "Describe the salinity profile used.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.seaice.thermodynamics.salt.thermodynamics.salinity_type", "label": "Salt > Thermodynamics > Salinity Type", "description": "How is salinity determined in the thermodynamic calculation?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Method of describing the value of salinity", "label": "Salinity Method", "description": "Method of describing the value of salinity", "is_open": true, "choices": [{"description": null, "value": "Constant"}, {"description": null, "value": "Prescribed salinity profile"}, {"description": null, "value": "Prognostic salinity profile"}]}}, {"id": "cmip6.seaice.thermodynamics.salt.thermodynamics.constant_salinity_value", "label": "Salt > Thermodynamics > Constant Salinity Value", "description": "If using a constant salinity value specify this value in PSU?", "cardinality": "0.1", "type": "float"}, {"id": "cmip6.seaice.thermodynamics.salt.thermodynamics.additional_details", "label": "Salt > Thermodynamics > Additional Details", "description": "Describe the salinity profile used.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.seaice.thermodynamics.ice_thickness_distribution.representation", "label": "Ice Thickness Distribution > Representation", "description": "How is the sea ice thickness distribution represented?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Types of sea ice thickness representation", "label": "Ice Thickness Representation", "description": "Types of sea ice thickness representation", "is_open": true, "choices": [{"description": null, "value": "Explicit"}, {"description": null, "value": "Virtual (enhancement of thermal conductivity, thin ice melting)"}]}}, {"id": "cmip6.seaice.thermodynamics.melt_ponds.are_included", "label": "Melt Ponds > Are Included", "description": "Are melt ponds included in the sea ice model?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.seaice.thermodynamics.melt_ponds.formulation", "label": "Melt Ponds > Formulation", "description": "What method of melt pond formulation is used?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Formulations of melt ponds", "label": "Melt Pond Formulation", "description": "Formulations of melt ponds", "is_open": true, "choices": [{"description": null, "value": "Flocco and Feltham (2010)"}, {"description": null, "value": "Level-ice melt ponds"}]}}, {"id": "cmip6.seaice.thermodynamics.melt_ponds.impacts", "label": "Melt Ponds > Impacts", "description": "What do melt ponds have an impact on?", "cardinality": "1.N", "type": "enum", "enum": {"id": "Impacts of melt ponds", "label": "Melt Pond Impacts", "description": "Impacts of melt ponds", "is_open": true, "choices": [{"description": null, "value": "Albedo"}, {"description": null, "value": "Freshwater"}, {"description": null, "value": "Heat"}]}}, {"id": "cmip6.seaice.thermodynamics.snow_processes.has_snow_aging", "label": "Snow Processes > Has Snow Aging", "description": "Set to True if the sea ice model has a snow aging scheme.", "cardinality": "1.N", "type": "bool"}, {"id": "cmip6.seaice.thermodynamics.snow_processes.snow_aging_scheme", "label": "Snow Processes > Snow Aging Scheme", "description": "Describe the snow aging scheme.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.seaice.thermodynamics.snow_processes.has_snow_ice_formation", "label": "Snow Processes > Has Snow Ice Formation", "description": "Set to True if the sea ice model has snow ice formation.", "cardinality": "1.N", "type": "bool"}, {"id": "cmip6.seaice.thermodynamics.snow_processes.snow_ice_formation_scheme", "label": "Snow Processes > Snow Ice Formation Scheme", "description": "Describe the snow ice formation scheme.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.seaice.thermodynamics.snow_processes.redistribution", "label": "Snow Processes > Redistribution", "description": "What is the impact of ridging on snow cover?", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.seaice.thermodynamics.snow_processes.heat_diffusion", "label": "Snow Processes > Heat Diffusion", "description": "What is the heat diffusion through snow methodology in sea ice thermodynamics?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Types of snow processes", "label": "Snow Process Types", "description": "Types of snow processes", "is_open": true, "choices": [{"description": null, "value": "Single-layered heat diffusion"}, {"description": null, "value": "Multi-layered heat diffusion"}]}}]}, {"id": "cmip6.seaice.radiative_processes", "label": "Radiative Processes", "description": "Sea Ice Radiative Processes", "contact": "Ruth Petrie", "properties": [{"id": "cmip6.seaice.radiative_processes.surface_albedo", "label": "Surface Albedo", "description": "Method used to handle surface albedo.", "cardinality": "1.1", "type": "enum", "enum": {"id": "Surface albedo of sea ice component", "label": "Seaice Albedo", "description": "Surface albedo of sea ice component", "is_open": true, "choices": [{"description": null, "value": "Delta-Eddington"}, {"description": "Sea ice albedo is parameterized", "value": "Parameterized"}, {"description": "Albedo value has a spectral dependence", "value": "Multi-band albedo"}]}}, {"id": "cmip6.seaice.radiative_processes.ice_radiation_transmission", "label": "Ice Radiation Transmission", "description": "Method by which solar radiation through sea ice is handled.", "cardinality": "1.N", "type": "enum", "enum": {"id": "Ice radiative transmission", "label": "Ice Transmission", "description": "Ice radiative transmission", "is_open": true, "choices": [{"description": null, "value": "Delta-Eddington"}, {"description": null, "value": "Exponential attenuation"}, {"description": "Radiation transmission through ice is different for each sea ice category", "value": "Ice radiation transmission per category"}]}}]}]});

}(this.APP));