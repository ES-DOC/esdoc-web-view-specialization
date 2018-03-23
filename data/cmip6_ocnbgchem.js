(function (APP) {

    // ECMAScript 5 Strict Mode
    "use strict";

    // Register with application.
    APP.registerTopic({"id": "cmip6.ocnbgchem", "label": "Ocnbgchem", "description": "Ocean Biogeochemistry", "contact": "Eric Guilyardi", "authors": ["Eric Guilyardi"], "contributors": ["CMIP5 version + Olivier Aumont (LOCEAN/IPSL)", "Laurent Bopp (LSCE/IPSL)"], "project": "cmip6", "changeHistory": [{"note": "Initialised", "date": "2017-01-31", "version": "0.1.0", "author": "Eric Guilyardi"}, {"note": "Added plancton size as per specific request", "date": "2017-03-03", "version": "0.2.0", "author": "Eric Guilyardi"}, {"note": "Science updates and short table draft with O. Aumont", "date": "2017-03-08", "version": "0.3.0", "author": "Eric Guilyardi"}, {"note": "Science updates following community review with L. Bopp and O. Aumont", "date": "2017-11-08", "version": "0.4.0", "author": "Eric Guilyardi"}, {"note": "Science updates following community review phase 3", "date": "2017-12-12", "version": "0.5.0", "author": "Eric Guilyardi"}, {"note": "Version for release 1.0", "date": "2018-02-21", "version": "1.0.0", "author": "Eric Guilyardi"}], "shortTables": [{"id": "ocnbgchem", "label": "Ocean biogeochemistry CMIP6 short table", "properties": [{"priority": 1, "id": "cmip6.ocnbgchem.key_properties.name"}, {"priority": 1, "id": "cmip6.ocnbgchem.key_properties.model_type"}, {"priority": 1, "id": "cmip6.ocnbgchem.key_properties.elemental_stoichiometry"}, {"priority": 1, "id": "cmip6.ocnbgchem.key_properties.prognostic_variables"}, {"priority": 1, "id": "cmip6.ocnbgchem.key_properties.diagnostic_variables"}, {"priority": 1, "id": "cmip6.ocnbgchem.key_properties.damping"}, {"priority": 1, "id": "cmip6.ocnbgchem.key_properties.boundary_forcing.atmospheric_deposition"}, {"priority": 1, "id": "cmip6.ocnbgchem.key_properties.boundary_forcing.river_input"}, {"priority": 1, "id": "cmip6.ocnbgchem.key_properties.gas_exchange.CO2_exchange_type"}, {"priority": 1, "id": "cmip6.ocnbgchem.key_properties.gas_exchange.O2_exchange_type"}, {"priority": 1, "id": "cmip6.ocnbgchem.tracers.disolved_organic_matter.lability"}, {"priority": 1, "id": "cmip6.ocnbgchem.tracers.particules.method"}]}], "subTopics": [{"id": "cmip6.ocnbgchem.key_properties", "label": "Key Properties", "description": "Ocean Biogeochemistry key properties", "contact": "Eric Guilyardi", "properties": [{"id": "cmip6.ocnbgchem.key_properties.name", "label": "Name", "description": "Name of ocnbgchem model code", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.overview", "label": "Overview", "description": "Overview of ocnbgchem model.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.model_type", "label": "Model Type", "description": "Type of ocean biogeochemistry model", "cardinality": "1.1", "type": "enum", "enum": {"id": "Types of models for ocean biogeochemistry", "label": "Model Family", "description": "Types of models for ocean biogeochemistry", "is_open": true, "choices": [{"description": "No living compartments", "value": "Geochemical"}, {"description": "No plankton types", "value": "NPZD"}, {"description": "Several plankton types", "value": "PFT"}]}}, {"id": "cmip6.ocnbgchem.key_properties.elemental_stoichiometry", "label": "Elemental Stoichiometry", "description": "Describe elemental stoichiometry (fixed, variable, mix of the two)", "cardinality": "1.1", "type": "enum", "enum": {"id": "Types elemental stoichiometry for ocean biogeochemistry", "label": "Elemental Stoichiometry Types", "description": "Types elemental stoichiometry for ocean biogeochemistry", "is_open": false, "choices": [{"description": "Fixed stoichiometry", "value": "Fixed"}, {"description": "Variable stoichiometry", "value": "Variable"}, {"description": "Both fixed and mixed stoichiometry", "value": "Mix of both"}]}}, {"id": "cmip6.ocnbgchem.key_properties.elemental_stoichiometry_details", "label": "Elemental Stoichiometry Details", "description": "Describe which elements have fixed/variable stoichiometry", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.prognostic_variables", "label": "Prognostic Variables", "description": "List of all prognostic tracer variables in the ocean biogeochemistry component", "cardinality": "1.N", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.diagnostic_variables", "label": "Diagnostic Variables", "description": "List of all diagnotic tracer variables in the ocean biogeochemistry component (derived from prognostic variables", "cardinality": "1.N", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.damping", "label": "Damping", "description": "Describe any tracer damping used (such as artificial correction or relaxation to climatology,...)", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.time_stepping_framework.overview", "label": "Time Stepping Framework > Overview", "description": "Overview of time stepping framework for ocean biogeochemistry in ocnbgchem model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.time_stepping_framework.passive_tracers_transport.method", "label": "Time Stepping Framework > Passive Tracers Transport > Method", "description": "Time stepping framework for passive tracers", "cardinality": "1.1", "type": "enum", "enum": {"id": "Types of time stepping framework for passive tracers ocean biogeochemistry", "label": "Passive Tracers Transport", "description": "Types of time stepping framework for passive tracers ocean biogeochemistry", "is_open": false, "choices": [{"description": null, "value": "use ocean model transport time step"}, {"description": null, "value": "use specific time step"}]}}, {"id": "cmip6.ocnbgchem.key_properties.time_stepping_framework.passive_tracers_transport.timestep_if_not_from_ocean", "label": "Time Stepping Framework > Passive Tracers Transport > Timestep If Not From Ocean", "description": "Time step for passive tracers (if different from ocean)", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.ocnbgchem.key_properties.time_stepping_framework.biology_sources_sinks.method", "label": "Time Stepping Framework > Biology Sources Sinks > Method", "description": "Time stepping framework for biology sources and sinks", "cardinality": "1.1", "type": "enum", "enum": {"id": "Types of time stepping framework for passive tracers ocean biogeochemistry", "label": "Passive Tracers Transport", "description": "Types of time stepping framework for passive tracers ocean biogeochemistry", "is_open": false, "choices": [{"description": null, "value": "use ocean model transport time step"}, {"description": null, "value": "use specific time step"}]}}, {"id": "cmip6.ocnbgchem.key_properties.time_stepping_framework.biology_sources_sinks.timestep_if_not_from_ocean", "label": "Time Stepping Framework > Biology Sources Sinks > Timestep If Not From Ocean", "description": "Time step for biology sources and sinks (if different from ocean)", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.ocnbgchem.key_properties.transport_scheme.overview", "label": "Transport Scheme > Overview", "description": "Overview of transport scheme in ocean biogeochemistry in ocnbgchem model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.transport_scheme.type", "label": "Transport Scheme > Type", "description": "Type of transport scheme", "cardinality": "1.1", "type": "enum", "enum": {"id": "Types of transport in ocean biogeochemistry", "label": "Transport Types", "description": "Types of transport in ocean biogeochemistry", "is_open": false, "choices": [{"description": null, "value": "Offline"}, {"description": null, "value": "Online"}]}}, {"id": "cmip6.ocnbgchem.key_properties.transport_scheme.scheme", "label": "Transport Scheme > Scheme", "description": "Transport scheme used", "cardinality": "1.1", "type": "enum", "enum": {"id": "Types of transport in ocean biogeochemistry", "label": "Transport Scheme", "description": "Types of transport in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "Use that of ocean model"}]}}, {"id": "cmip6.ocnbgchem.key_properties.transport_scheme.use_different_scheme", "label": "Transport Scheme > Use Different Scheme", "description": "Decribe transport scheme if different than that of ocean model", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.boundary_forcing.overview", "label": "Boundary Forcing > Overview", "description": "Overview of properties of biogeochemistry boundary forcing in ocnbgchem model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.boundary_forcing.atmospheric_deposition", "label": "Boundary Forcing > Atmospheric Deposition", "description": "Describe how atmospheric deposition is modeled", "cardinality": "1.1", "type": "enum", "enum": {"id": "Type of atmospheric deposition in ocean biogeochemistry", "label": "Sources Atmos Deposition", "description": "Type of atmospheric deposition in ocean biogeochemistry", "is_open": false, "choices": [{"description": null, "value": "from file (climatology)"}, {"description": null, "value": "from file (interannual variations)"}, {"description": null, "value": "from Atmospheric Chemistry model"}]}}, {"id": "cmip6.ocnbgchem.key_properties.boundary_forcing.river_input", "label": "Boundary Forcing > River Input", "description": "Describe how river input is modeled", "cardinality": "1.1", "type": "enum", "enum": {"id": "Type of river input in ocean biogeochemistry", "label": "Sources River Input", "description": "Type of river input in ocean biogeochemistry", "is_open": false, "choices": [{"description": null, "value": "from file (climatology)"}, {"description": null, "value": "from file (interannual variations)"}, {"description": null, "value": "from Land Surface model"}]}}, {"id": "cmip6.ocnbgchem.key_properties.boundary_forcing.sediments_from_boundary_conditions", "label": "Boundary Forcing > Sediments From Boundary Conditions", "description": "List which sediments are speficied from boundary condition", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.boundary_forcing.sediments_from_explicit_model", "label": "Boundary Forcing > Sediments From Explicit Model", "description": "List which sediments are speficied from explicit sediment model", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.overview", "label": "Gas Exchange > Overview", "description": "Overview of properties of gas exchange in ocean biogeochemistry  in ocnbgchem model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.CO2_exchange_present", "label": "Gas Exchange > CO2 Exchange Present", "description": "Is CO2 gas exchange modeled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.CO2_exchange_type", "label": "Gas Exchange > CO2 Exchange Type", "description": "Describe CO2 gas exchange", "cardinality": "0.1", "type": "enum", "enum": {"id": "Type of gas exchange in ocean biogeochemistry", "label": "Gas Exchange Types", "description": "Type of gas exchange in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "OMIP protocol"}]}}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.O2_exchange_present", "label": "Gas Exchange > O2 Exchange Present", "description": "Is O2 gas exchange modeled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.O2_exchange_type", "label": "Gas Exchange > O2 Exchange Type", "description": "Describe O2 gas exchange", "cardinality": "0.1", "type": "enum", "enum": {"id": "Type of gas exchange in ocean biogeochemistry", "label": "Gas Exchange Types", "description": "Type of gas exchange in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "OMIP protocol"}]}}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.DMS_exchange_present", "label": "Gas Exchange > DMS Exchange Present", "description": "Is DMS gas exchange modeled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.DMS_exchange_type", "label": "Gas Exchange > DMS Exchange Type", "description": "Specify DMS gas exchange scheme type", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.N2_exchange_present", "label": "Gas Exchange > N2 Exchange Present", "description": "Is N2 gas exchange modeled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.N2_exchange_type", "label": "Gas Exchange > N2 Exchange Type", "description": "Specify N2 gas exchange scheme type", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.N2O_exchange_present", "label": "Gas Exchange > N2O Exchange Present", "description": "Is N2O gas exchange modeled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.N2O_exchange_type", "label": "Gas Exchange > N2O Exchange Type", "description": "Specify N2O gas exchange scheme type", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.CFC11_exchange_present", "label": "Gas Exchange > CFC11 Exchange Present", "description": "Is CFC11 gas exchange modeled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.CFC11_exchange_type", "label": "Gas Exchange > CFC11 Exchange Type", "description": "Specify CFC11 gas exchange scheme type", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.CFC12_exchange_present", "label": "Gas Exchange > CFC12 Exchange Present", "description": "Is CFC12 gas exchange modeled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.CFC12_exchange_type", "label": "Gas Exchange > CFC12 Exchange Type", "description": "Specify CFC12 gas exchange scheme type", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.SF6_exchange_present", "label": "Gas Exchange > SF6 Exchange Present", "description": "Is SF6 gas exchange modeled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.SF6_exchange_type", "label": "Gas Exchange > SF6 Exchange Type", "description": "Specify SF6 gas exchange scheme type", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.13CO2_exchange_present", "label": "Gas Exchange > 13CO2 Exchange Present", "description": "Is 13CO2 gas exchange modeled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.13CO2_exchange_type", "label": "Gas Exchange > 13CO2 Exchange Type", "description": "Specify 13CO2 gas exchange scheme type", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.14CO2_exchange_present", "label": "Gas Exchange > 14CO2 Exchange Present", "description": "Is 14CO2 gas exchange modeled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.14CO2_exchange_type", "label": "Gas Exchange > 14CO2 Exchange Type", "description": "Specify 14CO2 gas exchange scheme type", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.gas_exchange.other_gases", "label": "Gas Exchange > Other Gases", "description": "Specify any other gas exchange", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.carbon_chemistry.overview", "label": "Carbon Chemistry > Overview", "description": "Overview of properties of carbon chemistry biogeochemistry in ocnbgchem model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.key_properties.carbon_chemistry.type", "label": "Carbon Chemistry > Type", "description": "Describe how carbon chemistry is modeled", "cardinality": "1.1", "type": "enum", "enum": {"id": "Type of carbon chemistry in ocean biogeochemistry", "label": "Carbon Chemistry", "description": "Type of carbon chemistry in ocean biogeochemistry", "is_open": false, "choices": [{"description": null, "value": "OMIP protocol"}, {"description": null, "value": "Other protocol"}]}}, {"id": "cmip6.ocnbgchem.key_properties.carbon_chemistry.ph_scale", "label": "Carbon Chemistry > Ph Scale", "description": "If NOT OMIP protocol, describe pH scale.", "cardinality": "0.1", "type": "enum", "enum": {"id": "Type of carbon chemistry pH scale in ocean biogeochemistry", "label": "Ph Scale", "description": "Type of carbon chemistry pH scale in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "Sea water"}, {"description": null, "value": "Free"}]}}, {"id": "cmip6.ocnbgchem.key_properties.carbon_chemistry.constants_if_not_OMIP", "label": "Carbon Chemistry > Constants If Not OMIP", "description": "If NOT OMIP protocol, list carbon chemistry constants.", "cardinality": "0.1", "type": "str"}]}, {"id": "cmip6.ocnbgchem.tracers", "label": "Tracers", "description": "Ocean biogeochemistry tracers", "contact": "Eric Guilyardi", "properties": [{"id": "cmip6.ocnbgchem.tracers.name", "label": "Name", "description": "Commonly used name for the tracers in ocnbgchem model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.tracers.overview", "label": "Overview", "description": "Overview of ocean biogeochemistry tracers in ocnbgchem model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.tracers.sulfur_cycle_present", "label": "Sulfur Cycle Present", "description": "Is sulfur cycle modeled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.tracers.nutrients_present", "label": "Nutrients Present", "description": "List nutrient species present in ocean biogeochemistry model", "cardinality": "1.N", "type": "enum", "enum": {"id": "Nutrients species in ocean biogeochemistry", "label": "Nutrients Species", "description": "Nutrients species in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "Nitrogen (N)"}, {"description": null, "value": "Phosphorous (P)"}, {"description": null, "value": "Silicium (S)"}, {"description": null, "value": "Iron (Fe)"}]}}, {"id": "cmip6.ocnbgchem.tracers.nitrous_species_if_N", "label": "Nitrous Species If N", "description": "If nitrogen present, list nitrous species.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Nitrous species in ocean biogeochemistry", "label": "Nitrous Species", "description": "Nitrous species in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "Nitrates (NO3)"}, {"description": null, "value": "Amonium (NH4)"}]}}, {"id": "cmip6.ocnbgchem.tracers.nitrous_processes_if_N", "label": "Nitrous Processes If N", "description": "If nitrogen present, list nitrous processes.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Nitrous processes in ocean biogeochemistry", "label": "Nitrous Processes", "description": "Nitrous processes in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "Dentrification"}, {"description": null, "value": "N fixation"}]}}, {"id": "cmip6.ocnbgchem.tracers.ecosystem.overview", "label": "Ecosystem > Overview", "description": "Overview of ecosystem properties in ocean biogeochemistry in ocnbgchem model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.tracers.ecosystem.upper_trophic_levels_definition", "label": "Ecosystem > Upper Trophic Levels Definition", "description": "Describe how upper trophic levels are defined in model (e.g. based on size)", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.ocnbgchem.tracers.ecosystem.upper_trophic_levels_treatment", "label": "Ecosystem > Upper Trophic Levels Treatment", "description": "Describe how upper trophic levels are treated in model", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.ocnbgchem.tracers.ecosystem.phytoplankton.type", "label": "Ecosystem > Phytoplankton > Type", "description": "Type of phytoplankton", "cardinality": "1.1", "type": "enum", "enum": {"id": "Phytoplankton types in ocean biogeochemistry", "label": "Phytoplankton Types", "description": "Phytoplankton types in ocean biogeochemistry", "is_open": false, "choices": [{"description": null, "value": "None"}, {"description": null, "value": "Generic"}, {"description": "Plankton functional type including size based", "value": "PFT including size based (specify both below)"}, {"description": null, "value": "Size based only (specify below)"}, {"description": null, "value": "PFT only (specify below)"}]}}, {"id": "cmip6.ocnbgchem.tracers.ecosystem.phytoplankton.pft", "label": "Ecosystem > Phytoplankton > Pft", "description": "Phytoplankton functional types (PFT) (if applicable)", "cardinality": "0.N", "type": "enum", "enum": {"id": "Phytoplankton functional types list in ocean biogeochemistry", "label": "Phytoplankton Pft List", "description": "Phytoplankton functional types list in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "Diatoms"}, {"description": null, "value": "Nfixers"}, {"description": null, "value": "Calcifiers"}]}}, {"id": "cmip6.ocnbgchem.tracers.ecosystem.phytoplankton.size_classes", "label": "Ecosystem > Phytoplankton > Size Classes", "description": "Phytoplankton size classes (if applicable)", "cardinality": "0.N", "type": "enum", "enum": {"id": "Phytoplankton size classes in ocean biogeochemistry", "label": "Phytoplankton Size Classes", "description": "Phytoplankton size classes in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "Microphytoplankton"}, {"description": null, "value": "Nanophytoplankton"}, {"description": null, "value": "Picophytoplankton"}]}}, {"id": "cmip6.ocnbgchem.tracers.ecosystem.zooplankton.type", "label": "Ecosystem > Zooplankton > Type", "description": "Type of zooplankton", "cardinality": "1.1", "type": "enum", "enum": {"id": "Zooplankton types in ocean biogeochemistry", "label": "Zooplankton Types", "description": "Zooplankton types in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "None"}, {"description": null, "value": "Generic"}, {"description": null, "value": "Size based (specify below)"}]}}, {"id": "cmip6.ocnbgchem.tracers.ecosystem.zooplankton.size_classes", "label": "Ecosystem > Zooplankton > Size Classes", "description": "Zooplankton size classes (if applicable)", "cardinality": "0.N", "type": "enum", "enum": {"id": "Zooplankton size classes in ocean biogeochemistry", "label": "Zooplankton Size Classes", "description": "Zooplankton size classes in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "Microzooplankton"}, {"description": null, "value": "Mesozooplankton"}]}}, {"id": "cmip6.ocnbgchem.tracers.disolved_organic_matter.overview", "label": "Disolved Organic Matter > Overview", "description": "Overview of disolved organic matter properties in ocean biogeochemistry in ocnbgchem model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.tracers.disolved_organic_matter.bacteria_present", "label": "Disolved Organic Matter > Bacteria Present", "description": "Is there bacteria representation ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.tracers.disolved_organic_matter.lability", "label": "Disolved Organic Matter > Lability", "description": "Describe treatment of lability in dissolved organic matter", "cardinality": "1.1", "type": "enum", "enum": {"id": "Lability treatment of dissolved organic matter in ocean biogeochemistry", "label": "Lability Treatment", "description": "Lability treatment of dissolved organic matter in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "None"}, {"description": "Less than a few days", "value": "Labile"}, {"description": "Few days to a few years", "value": "Semi-labile"}, {"description": "Over a few years", "value": "Refractory"}]}}, {"id": "cmip6.ocnbgchem.tracers.particules.overview", "label": "Particules > Overview", "description": "Overview of particulate carbon properties in ocean biogeochemistry in ocnbgchem model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.tracers.particules.method", "label": "Particules > Method", "description": "How is particulate carbon represented in ocean biogeochemistry?", "cardinality": "1.N", "type": "enum", "enum": {"id": "Particulate carbon representation in ocean biogeochemistry", "label": "Particules Method", "description": "Particulate carbon representation in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "Diagnostic"}, {"description": null, "value": "Diagnostic (Martin profile)"}, {"description": null, "value": "Diagnostic (Balast)"}, {"description": null, "value": "Prognostic"}]}}, {"id": "cmip6.ocnbgchem.tracers.particules.types_if_prognostic", "label": "Particules > Types If Prognostic", "description": "If prognostic, type(s) of particulate matter taken into account", "cardinality": "0.N", "type": "enum", "enum": {"id": "Prognostic particulate carbon types in ocean biogeochemistry", "label": "Prognostic Particules Types", "description": "Prognostic particulate carbon types in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "POC"}, {"description": null, "value": "PIC (calcite)"}, {"description": null, "value": "PIC (aragonite"}, {"description": null, "value": "BSi"}]}}, {"id": "cmip6.ocnbgchem.tracers.particules.size_if_prognostic", "label": "Particules > Size If Prognostic", "description": "If prognostic, describe if a particule size spectrum is used to represent distribution of particules in water volume", "cardinality": "0.1", "type": "enum", "enum": {"id": "Prognostic particulate carbon size in ocean biogeochemistry", "label": "Prognostic Particules Sizes", "description": "Prognostic particulate carbon size in ocean biogeochemistry", "is_open": false, "choices": [{"description": null, "value": "No size spectrum used"}, {"description": null, "value": "Full size spectrum"}, {"description": null, "value": "Discrete size classes (specify which below)"}]}}, {"id": "cmip6.ocnbgchem.tracers.particules.size_if_discrete", "label": "Particules > Size If Discrete", "description": "If prognostic and discrete size, describe which size classes are used", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.tracers.particules.sinking_speed_if_prognostic", "label": "Particules > Sinking Speed If Prognostic", "description": "If prognostic, method for calculation of sinking speed of particules", "cardinality": "0.1", "type": "enum", "enum": {"id": "Prognostic particulate carbon sinking speed in ocean biogeochemistry", "label": "Prognostic Particules Sinking Speed", "description": "Prognostic particulate carbon sinking speed in ocean biogeochemistry", "is_open": true, "choices": [{"description": null, "value": "Constant"}, {"description": null, "value": "Function of particule size"}, {"description": null, "value": "Function of particule type (balast)"}]}}, {"id": "cmip6.ocnbgchem.tracers.dic_alkalinity.overview", "label": "Dic Alkalinity > Overview", "description": "Overview of dic and alkalinity properties in ocean biogeochemistry in ocnbgchem model.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.ocnbgchem.tracers.dic_alkalinity.carbon_isotopes", "label": "Dic Alkalinity > Carbon Isotopes", "description": "Which carbon isotopes are modelled (C13, C14)?", "cardinality": "1.N", "type": "enum", "enum": {"id": "List of carbon isotopes in ocean biogeochemistry", "label": "Carbon Isotopes List", "description": "List of carbon isotopes in ocean biogeochemistry", "is_open": false, "choices": [{"description": null, "value": "C13"}, {"description": null, "value": "C14)"}]}}, {"id": "cmip6.ocnbgchem.tracers.dic_alkalinity.abiotic_carbon", "label": "Dic Alkalinity > Abiotic Carbon", "description": "Is abiotic carbon modelled ?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.ocnbgchem.tracers.dic_alkalinity.alkalinity", "label": "Dic Alkalinity > Alkalinity", "description": "How is alkalinity modelled ?", "cardinality": "1.1", "type": "enum", "enum": {"id": "Types of alkalinity modelling in ocean biogeochemistry", "label": "Alkalinity Model Types", "description": "Types of alkalinity modelling in ocean biogeochemistry", "is_open": false, "choices": [{"description": null, "value": "Prognostic"}, {"description": null, "value": "Diagnostic)"}]}}]}]});

}(this.APP));